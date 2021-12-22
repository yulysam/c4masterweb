const Usuario = require('../models/user')
const jwt = require('jsonwebtoken')
const key = 'HolaMundo'

const autorizarUsuario = async (id) =>{
    const user = await Usuario.findOne({_id:id})
    if (!user)return "este Usuario no existe"
    if(user.estado != "Autorizado"){
        await Usuario.updateOne({_id:id},{estado:"Autorizado"})
        return "Usuario Autorizado"
    }
    return "el usuario ya tiene autorizacion"
} 

const ingresar = async (email, clave) => {
    try {
        const usuario = await Usuario.findOne({correo:email})
        if (!usuario) {
            return {
                status: 401
            }
        }
        //AES256 es una libreria de criptografia para encriptar y desencriptar.
        
        if (clave != usuario.clave) {
            return {
                status: 401
            }
        }
        const token = jwt.sign({
            rol: usuario.rol,
            autorizado: usuario.estado

        }, key, { expiresIn: 60 * 60 * 2 })

        return {
            status: 200,
            jwt: token
        }

    } catch (error) {
        console.log(error)
    }
}

const registrar = async (user) =>{ 
    const {correo} = user
    const registro = await Usuario.findOne({correo})
    if (registro) return "este correo ya se encuentra registrado"
    const regUsuario = new Usuario(user)
    return regUsuario.save()
        .then(u => "Usuario Registrado")
        .cacth(e => console.log(e))
}

module.exports = {
    autorizarUsuario,
    ingresar,
    registrar
}