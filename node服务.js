const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer();
// 监听request请求（get，post等）
server.on("request", (req, res) => {
  // 获取请求路径req.url，与本地路径__dirname拼接
  const fpath = path.join(__dirname, req.url);
  console.log("get path", fpath);
  // 读取本地文件
  fs.readFile(fpath, "utf8", (err, dataStr) => {
    if (err) return res.end("<h1>404 Not Fount.</h1>");
    res.end(dataStr);
  });
});
// 启动http服务器
server.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
