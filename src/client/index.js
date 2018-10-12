fetch('/api/v1/example')
  .then(response => response.json())
  .then(json => console.log(json))
