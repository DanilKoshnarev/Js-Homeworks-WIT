const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const prisma = require('./prismaClient');


app.use(cors());
app.use(express.json());


app.get('/api/posts', async (req, res) => {
  const posts = await prisma.post.findMany({ include: { tags: true } });
  res.json({ status: 'success', data: posts });
});


app.get('/api/posts/:id', async (req, res) => {
  const postId = parseInt(req.params.id);
  const post = await prisma.post.findUnique({
    where: { id: postId },
    include: { tags: true }
  });
  if (post) {
    res.json({ status: 'success', data: post });
  } else {
    res.status(404).json({ status: 'error', message: 'Пост не найден' });
  }
});


app.get('/api/tags', async (req, res) => {
  const tags = await prisma.tag.findMany();
  res.json({ status: 'success', data: tags });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
