'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _mime = require('mime');

var _mime2 = _interopRequireDefault(_mime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 3000,
    hostname = '127.0.0.1';

_http2.default.createServer(function (req, res) {
    var urlObj = _url2.default.parse(req.url);
    var pathname = urlObj.pathname === '/' ? 'index.html' : urlObj.pathname;
    var filePath = _path2.default.join(__dirname, 'public', pathname);
    var csr = _fs2.default.createReadStream(filePath);
    csr.on('error', function (err) {
        var msg = err.toString();
        res.writeHead(404, {
            'Content-Type': 'text/plain;charset=utf-8',
            'Content-Length': Buffer.byteLength(msg)
        });
        res.end(msg);
    });
    res.writeHead(200, {
        'Content-Type': _mime2.default.lookup(filePath)
    });
    csr.pipe(res);
}).listen(port, hostname, function () {
    console.log('server listening on http://localhost:' + port);
});
