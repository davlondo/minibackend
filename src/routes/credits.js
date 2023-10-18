const { Router } = require('express');
const { getCreditos, obtenerCreditosId, editarCredito, crearCredito, eliminarCredito } = require('../controllers/credits');
const router = Router();

//Raiz
router.get('/credits/', getCreditos);
router.get('/credits/:id', obtenerCreditosId);
router.post('/credits/', crearCredito);
router.put('/credit/:id', editarCredito);
router.delete('/credit/:id', eliminarCredito);

module.exports = router;