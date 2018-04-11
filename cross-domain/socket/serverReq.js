const express = require('express');
const app = express();
var port = 8080;
app.use(express.static(__dirname+'/static'))
console.log(__dirname);
app.listen(port,()=>{
    console.log(`listen server port:${port}`);
})