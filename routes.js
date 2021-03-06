const fs = require('fs');

const requestHandler=(req,res)=>{
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const method = parsedBody.split('=')[1];
            fs.writeFile('message.txt', method , err =>{
                res.statusCode = 302;
                res.setHeader('location', '/')
                return res.end();
            });
        })
    }
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><h2>hello from my node js server</h2></body>')
    res.write('</html>');
    res.end();
}
module.exports={
    handler:requestHandler,
    text:'some haard code'
};

//module.exports=requestHandler;
//module.exports.handler=requestHandler;

