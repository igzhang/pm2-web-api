const express = require('express')
const pm2 = require('pm2')

var indexRouter = require('./routes/index');


const app = express()
const port = 3000


app.use(express.json());
app.use('/', indexRouter);


pm2.connect(function(err) {
  if (err) {
    console.error(err);
    process.exit(2);
  }

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})
