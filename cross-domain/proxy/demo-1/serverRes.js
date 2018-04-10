const express = require('express');
const app = express();
var port = 8081;
app.listen(port,()=>{
    console.log('serverRes is listening on port '+ port);
})

app.get(/^\//,(req,res)=>{
    res.send('李程欢')
})