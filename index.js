const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 静态文件服务：指定 public 文件夹
app.use(express.static(path.join(__dirname, 'public')));

// 首页路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 启动服务
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
