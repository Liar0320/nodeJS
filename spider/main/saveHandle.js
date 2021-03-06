const cheerio = require('cheerio');
const fs = require('fs');
const iconv = require('iconv-lite');
const http = require('http');
const https = require('https');
//const url = 'http://www.abcxs.com/book/32172/13366448.html';

///请求网页
function saveHandle(url,name,index,bookName){
    try {
        var _http = url[0].indexOf('https')>-1?https:http;
        _http.get(url,(res)=>{
            const arrBuf = [];
            var BufLength = 0;
            res.on('data',(chunk)=>{
              arrBuf.push(chunk);
              BufLength +=chunk.length;
            });
            res.on('end',()=>{    
                var chunkAll = Buffer.concat(arrBuf,BufLength);
                var $ = cheerio.load(chunkAll,{decodeEntities:false});
                var html = '';
               $('meta').each((index,ele)=>{
                   if($(ele).attr().content.indexOf('gbk')>-1||$(ele).attr().content.indexOf('gb2312')){
                     html = iconv.decode(chunkAll,'gbk');   //用gbk解码
                     $ = cheerio.load(html, {decodeEntities: false});
                     return false;
                   }else if(index === $('meta').length-1){
                     $ = cheerio.load(html);    ///默认utf-8
                     return false;
                   }    
                });
                var content = $('#content').text();
               // console.log(content);
                saveFile(content,name,index,bookName);
                // var url = $('#book .page_chapter a:nth-child(3)').text();
                // console.log('url',url);
            })
        })
    } catch (error) {
        console.log(error);
    }
}


function saveFile(content,name='龙王传说',index,bookName){
    fs.appendFile(`./content/${bookName}/${index-10}.txt`,name+content,(err)=>{
         console.log(err);
        console.log(`${name}添加成功`);
    })
}

/**
 * 增加下载videos放发
 * @param {*} url 
 * @param {*} index 
 * @param {*} name 
 * const superagent = require('superagent');
 */
// var downloadVideo = function(url, index, name) {
//     var filename = name + '.mp4';
 
//     // 创建一个以课程名字命名的目录存放视频
//     var dirPath = './videos/'
//     if (!fs.existsSync(dirPath)) {
//         fs.mkdirSync(dirPath);
//     }
 
//     console.log('开始下载第' + index + '个视频' + filename + ' 地址: ' + url);
//     var writeStream = fs.createWriteStream(dirPath + filename);
//     writeStream.on('close', function() {
//         console.log('下载完成' + filename);
//     })

//     let req = superagent.get(url); //响应流
    
//     req.pipe(writeStream);
// }


//export default reciveContent;
module.exports = saveHandle;