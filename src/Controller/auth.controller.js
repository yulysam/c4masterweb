const jwt = require('jsonwebtoken')
const Usuario = require('../models/user')
const key = 'HolaMundo'

const singIn = async (request,response, next) => {
    try{

        const user = await Usuario.findOne({correo:request.body?.correo})
        if (!user)  return response.status(401).json({response:"verifique usuario y contraseña"})

        if (request.body?.clave != user.clave) return response.status(401).json({response:"verifique usuario y contraseña"}) 
        
        const token = jwt.sign({
            rol : user.rol
        }, key, {expiresIn: 60*60 })

        response.status(200).json({jwt: token})
        

    }catch(error){
        console.log(error)
        response.status(500).json({response:"contacte al administrador"})
    }
    
}


module.exports = singIn
