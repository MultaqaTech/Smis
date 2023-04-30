const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

// Регистрация нового пользователя
router.post('/', async (req, res) => {
  const { username, password } = req.body;
 console.log(req.body)
  try {
    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создание нового пользователя в базе данных
    const user = await User.create({
	  username,
      password: hashedPassword,
    });
	console.log("user", user)
    res.json({ user });
	
  } catch (err) {
	console.log("!!!!", err)
    res.status(500).json({ message: err.message });
  }
});

// Вход пользователя
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
 
  try {
    // Поиск пользователя в базе данных
    const user = await User.findOne({ where: { username} });

    // Если пользователь не найден
    if (!user) {
		console.log('Пользователь не найден')
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    // Проверка пароля
    const isValidPassword = await bcrypt.compare(password, user.password);

    // Если пароль неверный
    if (!isValidPassword) {
		console.log('Неверный пароль')
      return res.status(401).json({ message: 'Неверный пароль' });
    }

    // Создание JWT-токена
    const token = jwt.sign({ userId: user.id }, 'секретный ключ', { expiresIn: '1h' });
	console.log("token", token)
    res.json({ token });
  } catch (err) {
    res.status(500).json
	}
})

module.exports = router