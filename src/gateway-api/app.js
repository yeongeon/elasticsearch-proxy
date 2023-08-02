const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;  // Node.js 서버 포트

app.use(express.json());

// Elasticsearch 프록시 엔드포인트
app.all('/*', async (req, res) => {
  try {
    const targetUrl = `http://opensearch:8200${req.url}`;  // Elasticsearch 주소
    const response = await axios({
      method: req.method,
      url: targetUrl,
      data: req.body,
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
