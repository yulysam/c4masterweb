import React, {useState} from 'react'
import {gql} from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks';



const CREATE_PROYECTO = gql`
    mutation UpdateProyecto($nombre: String!, $objetivos: String!, $presupuesto: String) {
        updateProyecto(
        _id: "61c00cb0631af46fd0b1babf",
        input: {
            nombre: $nombre,
            objetivos: $objetivos,
            presupuesto: $presupuesto,
        }){
            _id
        }
    }
`;

const MessageForm = () => {

    const [nombre, setNombre] = useState('')
    const [objetivos, setObjetivos] = useState('')
    const [presupuesto, setPresupuesto] = useState('')


    const [updateProyecto] = useMutation(CREATE_PROYECTO)
    
    return (
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={ async e => {
                            e.preventDefault();
                            await updateProyecto({variables: {nombre,objetivos,presupuesto}})
                            window.location.href="/"
                        }}>

                            <div className='form-group'>
                                <input type="text" placeholder="Nombre" className="form-control" onChange={e => setNombre(e.target.value)} value={nombre}/>
                            </div>
                            <br></br>
                            <div className='form-group'>
                                <input type="text" placeholder="Objetivos" className="form-control" onChange={e => setObjetivos(e.target.value)} value={objetivos}/>
                            </div>
                            <br></br>
                            <div className='form-group'>
                                <input type="text" placeholder="Presupuesto" className="form-control" onChange={e => setPresupuesto(e.target.value)} value={presupuesto}/>
                            </div>
                            <br></br>
                            <button className='btn btn-primary btn-block'>
                                Editar
                            </button>                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageForm;