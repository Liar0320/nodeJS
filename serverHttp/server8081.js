var express = require('express');
var app = express();
 
app.use(express.static('public'));
 
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
 
app.get('/process_get', function (req, res) {

  const vaild = function(name,psw){
    return name==='liar'&&psw==='0320'
  }
   // 输出 JSON 格式
  const response = {
      data:vaild(req.query.name,req.query.psw)
  };
 console.log(response);


res.end(JSON.stringify(response));
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})