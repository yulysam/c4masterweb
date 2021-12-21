const Usuario = require('../models/user')

const autorizarUsuario = async (id) =>{
    const user = await Usuario.findOne({_id:id})
    if (!user)return "este Usuario no existe"
    if(user.estado != "Autorizado"){
        await Usuario.updateOne({_id:id},{estado:"Autorizado"})
        return "Usuario Autorizado"
    }
    return "el usuario ya tiene autorizacion"
} 

module.exports = {autorizarUsuario}