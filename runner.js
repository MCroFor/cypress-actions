const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ4NmIyNTNiLTJlNDQtNGQ5My04MGQ5LTJlZTA5ZDFjYzI0Ni0xNzQ0NjU4MzEyNTk0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYzAzOGQwMzAtYzE1NC00NmRlLWI3Y2ItYWFmY2E1YmQ2MGQxIiwidHlwZSI6InQifQ.VEAasGMmvdwgRATckkUJxWYO9ZkjSMLHj8Hnq2irbw4'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
