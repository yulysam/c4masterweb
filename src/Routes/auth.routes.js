const { Router }= require('express')
const singIn = require('../Controller/auth.controller')
const route = Router()

route.use((request,response,next)=>{
    next()

})

route.post('/login', singIn)