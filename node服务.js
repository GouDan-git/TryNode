const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()
server.on('request', (req, res) => {
	const fpath = path.join(__dirname, req.url)
	console.log('get path', fpath)
	fs.readFile(fpath, 'utf8', (err, dataStr) => {
		if (err) return res.end('<h1>404 Not Fount.</h1>')
		res.end(dataStr)
	})
})
server.listen(80, () => {
	console.log('server running at http://127.0.0.1')
})