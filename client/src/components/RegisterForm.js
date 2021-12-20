import React, {useState} from 'react'
import {gql} from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks';



const CREATE_USER = gql`
    mutation CreateUser($correo: String!, $contrasena: String!, $identificacion: String, $nombre: String, $apellido: String, $rol_aspiro: String) {
        createUser(input:{
            correo: $correo,
            contrasena: $contrasena,
            identificacion: $identificacion,
            nombre: $nombre,
            apellido: $apellido,
            rol_aspiro: $rol_aspiro
        }){
            _id
        }
    }
`;

const MessageForm = () => {

    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [rol_aspiro, setRol_aspiro] = useState('')

    const [createProyecto] = useMutation(CREATE_USER)
    
    return (
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={ async e => {
                            e.preventDefault();
                            await createProyecto({variables: {correo,contrasena,identificacion,nombre,apellido,rol_aspiro}})
                            window.location.href="/"
                        }}>

                            <div className='form-group'>
                                <input type="text" placeholder="Correo" className="form-control" onChange={e => setCorreo(e.target.value)} value={correo}/>
                            </div>
                            <br></br>
                            <div className='form-group'>
                                <input type="text" placeholder="Contrasena" className="form-control" onChange={e => setContrasena(e.target.value)} value={contrasena}/>
                            </div>
                            <br></br>
                            <div className='form-group'>
                                <input type="text" placeholder="Identificacion" className="form-control" onChange={e => setIdentificacion(e.target.value)} value={identificacion}/>
                            </div>
                            <br></br>
                            <div className='form-group'>
                                <input type="text" placeholder="Nombre" className="form-control" onChange={e => setNombre(e.target.value)} value={nombre}/>
                            </div>
                            <br></br>
                            <div className='form-group'>
                                <input type="text" placeholder="Apellido" className="form-control" onChange={e => setApellido(e.target.value)} value={apellido}/>
                            </div>
                            <br></br>
                            <div className='form-group'>
                                <input type="text" placeholder="Rol al que Aspira" className="form-control" onChange={e => setRol_aspiro(e.target.value)} value={rol_aspiro}/>
                            </div>
                            <br></br>
                            <button className='btn btn-primary btn-block'>
                                Enviar
                            </button>                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageForm;