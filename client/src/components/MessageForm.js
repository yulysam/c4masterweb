import React, {useState} from 'react'
import {gql} from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks';



const CREATE_MESSAGES = gql`
    mutation CreateProyecto($nombre: String!, $objetivos: String) {
        createProyecto(input:{
            nombre: $nombre, 
            objetivos: $objetivos
        }){
            _id
        }
    }
`;

const MessageForm = () => {

    const [nombre, setNombre] = useState('')
    const [objetivos, setObjetivos] = useState('')

    const [createProyecto] = useMutation(CREATE_MESSAGES)
    
    return (
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={ async e => {
                            e.preventDefault();
                            await createProyecto({variables: {nombre, objetivos}})
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