const express = require('express')
const app = express()


app.get('/', async (req, res) => {
  throw new Error('test');
  res.send('Hello World!')
})

function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}

app.use(errorHandler);
app.listen(3000, () => console.log('Example app listening on port 3000!'))
