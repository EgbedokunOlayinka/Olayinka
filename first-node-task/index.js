var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var buffer = require('buffer');

http.createServer(function(req,res){
    let data = [];
    let dataString = '';
    let dataSplit;
    req.on('data',chunk=>{
        data.push(chunk);
    });

    req.on ('end',()=>{
        dataString = data.toString();
        dataSplit = dataString.slice(8)
        fs.appendFile('message.txt', dataSplit, (err)=>{if(err) throw err}) 
    });

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(
        `<!DOCTYPE html>
        <html>
        <head>
        <title>A Simple Form</title>
        </head>
        <body>
        <form action="/message" method="POST">
        <label for="message">Please enter a message below:</label><br>
        <input type="text" id="message" name="message"><br>
        <input type="submit" value="submit">
        </form>
        </body>
        </html>`
    );
    res.end();
}).listen(8080);