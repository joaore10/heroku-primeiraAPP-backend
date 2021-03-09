const express = require('express')
const auth = require('./auth')

module.exports = function(server){

    // Rotas Abertas
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authServices')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)

    //Rotas Protegidas por token
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

   //rotas da API
   const billingCyclesService = require('../api/billingCycle/billingCycleService')
   billingCyclesService.register(protectedApi, '/billingCycles')

   const billingSummaryService = require('../api/billingSummary/billingSummaryService')
   protectedApi.route('/billingSummary').get(billingSummaryService.getSummary)
}