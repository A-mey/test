var express = require('express');
var app = express();

const hostname = "127.0.0.1";
const port = 8000;

app.use('/*', function (req, res) {
   res.send('Hello World');
})

app.listen(port, function () {
  console.log(`app listening on port ${port}!`);
});