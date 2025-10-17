const express = require('express');

const router = express.Router();

router.post('/login', (req, res) => {
	res.send('Esta es la ruta del login');
});

module.exports = router;

