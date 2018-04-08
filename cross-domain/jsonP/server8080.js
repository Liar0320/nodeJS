const express = require('express');
const app = express();
var port = 8080;
app.use(express.static(__dirname));
app.listen(port,()=>{
    console.log('requester is listening on port ' + port);
}) 