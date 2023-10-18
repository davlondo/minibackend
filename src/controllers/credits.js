const credits = require('../models/credits');

const obtenerCreditosId = async (req, res) => {
  const credito = await credits.findById(req.params.id);
  if (credito != null) {
    res.status(200).json(credito);
  } else {
    res.status(404).send({ mensaje: 'No existe' })
  }
}

const getCreditos = async (req, res) => {
  const userCredits = await credits.find();
  if (userCredits != null) {
    res.status(200).json(userCredits);
  } else {
    res.status(404).send({ mensaje: 'No encontrado' })
  }
}

const crearCredito = async (req, res) => {
  const newCredit = new credits({
    userName: req.body.userName,
    idClient: req.body.idClient,
    loanAmount: req.body.loanAmount
  });

  const credit = await newCredit.save();
  if (credit != null) {
    res.status(200).json(credit);
  } else {
    res.status(400).send({ mensaje: 'No existe' })
  }
}

const editarCredito = async (req, res) => {
  const credit = await credits.updateOne({ idLoan: req.params.id }, { $set: { amountPaid: req.body.amountPaid } });
  if (credit != null) {
    res.status(200).json(credit);
  } else {
    res.status(400).send({ mensaje: 'Error' })
  }
}

const eliminarCredito = async (req, res) => {
  const credit = await credits.findByIdAndDelete(req.params.id);
  if (credit != null) {
    res.status(200).json(credit);
  } else {
    res.status(403).send({ mensaje: 'No permitido' })
  }

}

module.exports = { obtenerCreditosId, getCreditos, crearCredito, editarCredito, eliminarCredito };