import path from 'path'
import express from 'express'
import proxy from 'http-proxy-middleware'
import compression from 'compression'

import env from './env.json'

const client = path.join(__dirname, '..', 'client')

const port = process.env.PORT || 1234
const app = express()

/**
 * Middlewares
 */
app.use(express.static(client))
app.use(compression())
app.use(proxy('/api', { target: env.apiHost, changeOrigin: true, pathRewrite: { '^/api/': '/' } }))

/**
 * Application Routes
 */
app.get('/', (req, res) => res.sendFile(path.join(client, 'index.html')))

/**
 * Start Server
 */
app.listen(port, _ => console.log(`Server Listening on http://localhost:${port}`))
