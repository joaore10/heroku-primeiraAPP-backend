const mongoose = require('mongoose')
const env = require('../.env')
const mongoUrl = env.mongoUrl || 'mongodb://localhost/db_finance'
module.exports = mongoose.connect( mongoUrl, { useNewUrlParser: true , useUnifiedTopology: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatorio"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite minimo de '{MIN}'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite maximo de '{MAX}'"
mongoose.Error.messages.String.enum = "'{VALUE}' não é valido para o atributo '{PATH}.'"