import React, {useState} from 'react'
import {gql} from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks';



const CREATE_MESSAGES = gql`
    mutation CreateProyecto($nombre: String!, $objetivos: String, $presupuesto: String, $estado: String, $face: String) {
        createProyecto(input:{
            nombre: $nombre, 
            objetivos: $objetivos,
            presupuesto: $presupuesto,
            estado: $estado,
            face: $face
        }){
            _id
        }
    }
`;

const MessageForm = () => {

    const [nombre, setNombre] = useState('')
    const [objetivos, setObjetivos] = useState('')
    const [presupuesto, setPresupuesto] = useState('')
    const [estado, setEstado] = useState('')
    const [face, setFace] = useState('')

    const [createProyecto] = useMutation(CREATE_MESSAGES)
    
    return (
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={ async e => {
                            e.preventDefault();
                            await createProyecto({variables: {nombre, objetivos, presupuesto, estado, face}})
                            window.location.href="/"
                        }}>

                            <div className='form-group'>
                                <input type="text" placeholder="nombre" className="form-control" onChange={e => setNombre(e.target.value)} value={nombre}/>
                            </div>
                            <br></br>
                            <div className='form-group'>
                                <textarea rows="2" placeholder="Obejetivos...." className="form-control" onChange={e => setObjetivos(e.target.value)} value={objetivos}></textarea>
                            </div>
                            <br></br>
                            <div className='form-group'>
                                <input type="text" placeholder="Presupuesto" className="form-control" onChange={e => setPresupuesto(e.target.value)} value={presupuesto}/>
                            </div>
                            <br></br>
                            <div className='form-group'>
                                <input type="text" placeholder="Estado" className="form-control" onChange={e => setEstado(e.target.value)} value={estado}/>
                            </div>
                            <br></br>
                            <div className='form-group'>
                                <input type="text" placeholder="Fase" className="form-control" onChange={e => setFace(e.target.value)} value={face}/>
                            </div>
                            <br></br>
                            <button className='btn btn-primary btn-block'>
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageForm;