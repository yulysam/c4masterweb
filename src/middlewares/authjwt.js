



const Estudiante = (rol) => {
    return rol === 'Estudiante'
}

const Administrador = (rol) => {
    return rol === 'Administrador'
}
const Lider = (rol) => {
    return rol === 'Lider'
}


module.exports={
    Estudiante,
    Administrador,
    Lider
}