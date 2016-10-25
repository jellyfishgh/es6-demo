import http from 'http'
import fs from 'fs'
import path from 'path'
import url from 'url'
import mime from 'mime'

const port = 3000, hostname = '127.0.0.1'

http.createServer((req, res) => {
    const urlObj = url.parse(req.url)
    const pathname = urlObj.pathname === '/' ? 'index.html' : urlObj.pathname
    const filePath = path.join(__dirname, 'public', pathname)
    const csr = fs.createReadStream(filePath)
    csr.on('error', (err) => {
        const msg = err.toString()
        res.writeHead(404, {
            'Content-Type': 'text/plain;charset=utf-8',
            'Content-Length': Buffer.byteLength(msg)
        })
        res.end(msg)
    })
    res.writeHead(200, {
        'Content-Type': mime.lookup(filePath)
    })
    csr.pipe(res)
}).listen(port, hostname, () => {
    console.log(`server listening on http://localhost:${port}`)
})
