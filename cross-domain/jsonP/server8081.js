const express = require('express');
const app = express();
var port = 8081;
app.use(express.static(__dirname));
app.get(/^\//,(req,res)=>{
    const callback = req.query.callback;
    console.log(req.query);
    res.send(callback +"('李程欢')")
})
app.listen(port,()=>{
    console.log('requester is listening on port ' + port);
})