//参考 案例 http://blog.csdn.net/yezhenxu1992/article/details/50820629
const url = 'http://www.abcxs.com/book/32172/13366448.html';
const chapter = 'http://www.biquge11.com';
//const chapter = 'https://www.baidu.com/';

//import saveHandle from './main/1';   nodev8.9.4  好像不支持es6的 import
const saveHandle = require('./main/saveHandle');
const getUrl = require('./main/getUrl')



getUrl([chapter,'/1_1151/'],getMain);
///url 章节url
///name 章节名称
//getMain(`${chapter}/1_1589/3129080.html`,'激战凌梓');
function getMain(url,name,index){
    console.log(url,name,index);
    saveHandle(url,name,index);
}


/*
    ///创建一个服务器
    const hostname = '127.0.0.1';
    const port = 3000;
    const server = http.createServer((req,res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html; charset=utf-8');
        res.end('hello world');
    })
    server.listen(port,hostname,()=>{
        console.log(`Server runing at http://${hostname}:${port}/`)
    })
*/




 
