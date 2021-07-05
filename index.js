const http = require('http');
const fs = require('fs');
const port = 8000;
const hostname = '127.0.0.1';
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('./index.html', (err,data)=>{
            res.end(data);
        })

    }else if (req.url === '/contact') {
            res.setHeader('Content-Type', 'text/html');
            fs.readFile('./contact.html', (err,data)=>{
                res.end(data);
            })
        }else if (req.url === '/about' || res.url === '/about-us') {
                res.setHeader('Content-Type', 'text/html');
                fs.readFile('./about.html', (err,data)=>{
                    res.end(data);
                });
            }else {
                    res.setHeader('Content-Type', 'text/html');
                    fs.readFile('./error.html', (err,data)=>{
                        res.end(data);
                    })
                }


        console.log(res.url);
        })

server.listen(port, hostname, () => {
    console.log(`sever running at http://${hostname}:${port}`);
});
