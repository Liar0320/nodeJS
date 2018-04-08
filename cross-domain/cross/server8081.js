var express = require('express');
var app = express();
 
app.use(express.static('public'));
 
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
 
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log(`应用实例，访问的端口${port}`)
})