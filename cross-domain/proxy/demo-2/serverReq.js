const express = require('express');
const http = require('http');
const proxy = require('http-proxy-middleware');
const app = express();
let port = 8080;
app.use(express.static(__dirname));
app.get('/api',proxy({target: 'http://localhost:8081/', changeOrigin: true}));

////////////
app.listen(port,()=>{
    console.log(`serverReq is listening on port ${port}`);
})
