var express = require('express');
var app = express();
 
app.use(express.static('public'));
 
app.get(/^\//, function (req, res) {
  res.setHeader('Access-Control-Allow-Origin','http://localhost:8081')
  res.end("欢迎来到9091端口");
})
 
var server = app.listen(9091, function () {
  var host = server.address().address
  var port = server.address().port
  console.log(`应用实例，访问的端口${port}`)
})