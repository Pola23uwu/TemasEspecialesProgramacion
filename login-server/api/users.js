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
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    const newUser = new Users({ name, email, password });
    await newUser.save();

    return res.status(201).json({ message: 'Usuario creado correctamente', user: newUser });
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear usuario', error });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, password } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const updatedUser = await Users.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    return res.json({ message: 'Usuario actualizado correctamente', user: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar usuario', error });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const deletedUser = await Users.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    return res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar usuario', error });
  }
});

module.exports = router;
