const authTokenMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ status: 'error', message: 'Заголовок Authorization не указан' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ status: 'error', message: 'Неверный формат заголовка Authorization' });
  }

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) {
      return res.status(403).json({ status: 'error', message: 'Невалидный токен' });
    }
    req.userId = user.userId;
    next();
  });
};

app.get('/api/me', authTokenMiddleware, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });

  if (!user) {
    return res.status(404).json({ status: 'error', message: 'Пользователь не найден' });
  }

  res.json({ status: 'success', data: user });
});
