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
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('./prismaClient');
const app = express();
const port = 5000;

app.use(express.json());


app.post('/api/register', async (req, res) => {
  const { email, password, name } = req.body;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return res.status(400).json({ status: 'error', message: 'Такой пользователь уже существует' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  const token = jwt.sign({ userId: user.id }, 'your_secret_key');
  res.json({ status: 'success', token });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return res.status(400).json({ status: 'error', message: 'Пользователь не найден' });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(400).json({ status: 'error', message: 'Пароли не совпадают' });
  }

  const token = jwt.sign({ userId: user.id }, 'your_secret_key');
  res.json({ status: 'success', token });
});Это что за файл?
