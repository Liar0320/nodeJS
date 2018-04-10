const express = require('express');
const http = require('http')
const app = express();
let port = 8080;
app.use(express.static(__dirname));
app.get('/api',(req,res)=>{
    console.log(1);
    // http.get('http://localhost:8081/api',(data)=>{
    //     res.send(data)
    // })
})

////////////
app.listen(port,()=>{
    console.log(`serverReq is listening on port ${port}`);
})
