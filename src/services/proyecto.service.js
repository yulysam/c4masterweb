const proyecto = require('../models/modelproyectos')
const User = require('../models/user')

const aprobarUsuario = async (_id, nombre) => {
    const user = await User.findOne({_id})
    if(user){
        const Project = await proyecto.findOne({nombre})
        const usuarioExiste = Project.solicitudes.find(i => i == _id)
        if(usuarioExiste){
            await proyecto.updateOne({nombre},{$pull:{solicitudes:_id}})
            return await proyecto.updateOne({nombre}, {$push:{integrantes:_id}})
                .then(u => "usuario Aceptado")
                .catch(e => console.log(e))
        }else{
            return "el usuario no tiene una solicitud"
        }
    }
}

const solcitarUnionalProyecto = async (id, nombre) => {
    const user = await User.findOne({id})
    if(user!=null){
        const Project = await proyecto.findOne({nombre:nombre})
        if(Project.integrantes.find(i => i == id)) return "ud ya es integrante en este proyecto"
             
        if(Project.solicitudes.find(i => i == id)){
            return "ud ya ha solicitado unirse"
                
        }else {
            return await proyecto.updateOne({nombre}, {$push:{solicitudes:id}})
                .then(u => "Solicitud recibida")
                .catch(e => console.log(e))
        }
    }
}
const activarProyecto = async (nombre) => {
    const StatePro = await proyecto.findOne({ nombre })
    if (StatePro && StatePro.estado === "Inactivo") {
        if(StatePro && StatePro.aprobado){
            return proyecto.updateOne({ nombre }, { estado: "Activo" })
                .then(u => "Proyecto activo")
        } else {
            return "EL proyecto no puede activarse mientras no se apruebe"
        }

    } else {
        return proyecto.updateOne({ nombre }, { estado: "Inactivo" })
            .then(u => 'proyecto Inactivo')
            .catch(e => console.log(e))
    }
}
const CrearProyecto = async (project) =>  {
    const{nombre} = project
    const validar = await proyecto.findOne({nombre})
    if (validar) {
        return "este proyecto ya existe"
    }else{
        const regProj = new proyecto(project)
        return regProj.save()
            .then(u => 'el projecto ha sido creado')
            .catch(e => console.log(e))
        
    }

}

const AprobarProyecto = async (nombre) =>{
    await proyecto.updateOne({ nombre }, { aprobado: true, estado: "Activo", fase: "en desarrollo" })
        .then(u => "proyecto en marcha")
}

const FinalizarProyecto = async (nombre) =>{
    await proyecto.updateOne({ nombre }, { estado: "Inactivo", fase: "finalizado" })
        .then(u => "el proyecto ha finalizado")
}

const ActualizarProyecto = async (name, updateProject) => {
        const { nombre, objetivosGenerales, objetivosEspecificos, presupuesto } = updateProject
        return proyecto.updateOne(
            { nombre:name },
            {
                nombre,
                $push: { objetivosGenerales},
                $push: { objetivosEspecificos }, presupuesto
            })
            .then(u => "Cambio registrado")
            .catch(e=> console.log(e))
}

const RegistroAvances = async (nombre, avances)=>{
    await proyecto.updateOne({nombre}, { $push: { avances } })
    return await proyecto.findOne({nombre})
        
}

module.exports = {
    activarProyecto,
    CrearProyecto,
    AprobarProyecto,
    FinalizarProyecto,
    ActualizarProyecto,
    RegistroAvances,
    aprobarUsuario,
    solcitarUnionalProyecto
}