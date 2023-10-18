const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CreditsSchema = new Schema({
    userName: { type: String, required: true },
    idClient: { type: String, required: true },
    idLoan: { type: String, required: true },
    createdDate: { type: Date, required: true, default: () => new Date() },
    paymentDate: { type: Date, required: false, default: () => new Date() },
    loanAmount: { type: Number, required: true },
    amountPaid: { type: Number, required: false, default: 0 },
    active: { type: Boolean, required: false, default: true },
});

module.exports = Credits = mongoose.model('credits', CreditsSchema);