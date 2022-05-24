const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt
    .hash(req.body.password, 10) // Hashing and salting the password
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      }); // Create new user
      user
        .save() // Save user in DB
        .then(() => res.status(201).json({ message: "User created" }))
        .catch((error) => res.status(403).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Incorrect password' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id }, '${process.env.TOKEN}', { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};
