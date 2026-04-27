const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 静态文件服务
app.use(express.static('public'));

// 首页路由
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

// 启动服务
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
