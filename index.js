const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 托管 public 文件夹里的所有静态文件
app.use(express.static(path.join(__dirname, 'public')));

// 访问根目录时，直接返回 index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行成功！地址：http://localhost:${port}`);
});