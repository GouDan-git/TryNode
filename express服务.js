const express = require("express");
// 创建web服务器
const app = express();

// 对外提供静态资源（"/public"为路径前缀）
// app.use(express.static("./public"));
app.use("/public", express.static("./public"));

// 监听get请求
app.get("/user", (req, res) => {
  res.send({ name: "你的名字" });
});
app.get("/", (req, res) => {
  // req.query 可以接收url末尾的参数
  res.send(req.query);
});
app.get("/page/:size/:number", (req, res) => {
  // req.params 可以接收动态参数
  res.send(req.params);
});

// 监听post请求
app.post("/user", (req, res) => {
  res.send("post请求成功");
});

// 启动web服务器
app.listen("80", () => {
  console.log("express running at http://127.0.0.1");
});
