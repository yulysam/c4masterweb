import React, {useState} from 'react'
import {gql} from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks';



const CREATE_PROYECTO = gql`
    mutation UpdateProyecto($nombre: String!, $objetivos: String!, $presupuesto: String, $fecha_inicio: String, $fecha_fin: String, $estado: String, $face: String) {
        updateProyecto(
        _id: "61c00cb0631af46fd0b1babf",
        input: {
            nombre: $nombre,
            objetivos: $objetivos,
            presupuesto: $presupuesto,
            fecha_inicio: $fecha_inicio,
            fecha_fin: $fecha_fin,
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
    const [fecha_inicio, setFecha_inicio] = useState('')
    const [fecha_fin, setFecha_fin] = useState('')
    const [lider, setLider] = useState('')
    const [estado, setEstado] = useState('')
    const [face, setFace] = useState('')


    const [updateProyecto] = useMutation(CREATE_PROYECTO)
    
    return (
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={ async e => {
                            e.preventDefault();
                            await updateProyecto({variables: {nombre,objetivos,presupuesto,fecha_inicio,fecha_fin,lider, estado, face}})
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
                            <div className='form-group'>
                                <input type="text" placeholder="Fecha inicio" className="form-control" onChange={e => setFecha_inicio(e.target.value)} value={fecha_inicio}/>
                            </div>
                            <br></br>
                            <div className='form-group'>
                                <input type="text" placeholder="Fecha fin" className="form-control" onChange={e => setFecha_fin(e.target.value)} value={fecha_fin}/>
                            </div>
                            <br></br>
                            <div className='form-group'>
                                <input type="text" placeholder="Lider" className="form-control" onChange={e => setLider(e.target.value)} value={lider}/>
                            </div>
                            <br></br>
                            <div className='form-group'>
                                <input type="text" placeholder="Estado" className="form-control" onChange={e => setEstado(e.target.value)} value={estado}/>
                            </div>
                            <br></br>
                            <div className='form-group'>
                                <input type="text" placeholder="Face" className="form-control" onChange={e => setFace(e.target.value)} value={face}/>
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