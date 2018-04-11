const express = require('express');
const http = require('http')
const app = express();
let port = 8080;
app.use(express.static(__dirname));
app.get('/api',(req,res)=>{
    try{
        http.get('http://localhost:8081/api',(responseFromOtherDomain)=>{
             responseFromOtherDomain.on("data", function(data) {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.end(data);
            });
        })
    }catch(e){
        console.log(e);
    }
})

////////////
app.listen(port,()=>{
    console.log(`serverReq is listening on port ${port}`);
})
