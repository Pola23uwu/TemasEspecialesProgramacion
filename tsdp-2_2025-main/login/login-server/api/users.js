const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Users = require('../models/users');

router.get('/', async (_, res) => {
  const users = await Users.find({});
  return res.send(users);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      error: 'id invalid',
    });
  }

  const user = await Users.findById(id);

  if (!user) {
    return res.status(404).send({
      message: 'user not found',
    });
  } else {
    return res.send(user);
  }
  return res.status
});

// Tarea 14.
// Considerar: códigos http, errores
router.post('/', async () => {});
router.put('/:id', async () => {});
router.delete('/:id', async () => {});

module.exports = router;
