// 1. 必须引入 path 模块，后面要用
const express = require('express');
const path = require('path'); // <-- 新增这行
const app = express();

// 2. 静态文件服务：必须用 path.join(__dirname, 'public')
// 不要写 app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public'))); // <-- 关键修改

// 3. 首页路由：如果有 sendFile，也要改成绝对路径
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // <-- 关键修改
});

// 4. 端口监听：必须用 process.env.PORT，不能写死 3000
const port = process.env.PORT || 3000; // <-- 关键修改
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
