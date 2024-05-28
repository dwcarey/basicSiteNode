var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var pathname = q.pathname;
    var filename;

    if (pathname === '/' || pathname === '/index') {
        filename = './index.html';
    } else if (pathname === '/about') {
        filename = './about.html';
    } else if (pathname === '/contact-me') {
        filename = './contact-me.html';
    } else {
        filename = './404.html';
    }

    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write("404 Not Found");
            return res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);
