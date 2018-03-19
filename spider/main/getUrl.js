const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const http = require('http');
const https = require('https');
const fs = require('fs')
var count = 0;
///请求网页
function handle(url,call){
  //  console.log(url.join(''),url[0].indexOf('https'));
    var _http = url[0].indexOf('https')>-1?https:http;
    _http.get(url.join(''),(res)=>{
        const arrBuf = [];
        var BufLength = 0;
        res.on('data',(chunk)=>{
          arrBuf.push(chunk);
          BufLength +=chunk.length;
     
          console.log(count++);
        });
        res.on('end',()=>{    
            var chunkAll = Buffer.concat(arrBuf,BufLength);
            var $ = cheerio.load(chunkAll,{decodeEntities:false});
            var html = '';
    
            console.log('success');
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
            var bookName = $('#maininfo h1').text();
            console.log();
            fs.existsSync(`../content/${bookName}`)||fs.mkdirSync(`./content/${bookName}`);
            var content = $('#list a').each((index,item)=>{
                console.log($(item).text(),$(item).attr().href.split('/')[2]);
           //    call(`${url[0]}${$(item).attr().href}`,`${$(item).attr().href.split('/')[2]}`);
                call(`${url[0]}${$(item).attr().href}`,`${$(item).text()}`,index,bookName);
            });
          //  saveFile(content,0);
        })
    })
}
//export default reciveContent;
module.exports = handle;