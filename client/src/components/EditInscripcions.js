import React, {useState} from 'react'
import {gql} from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks';



const CREATE_INSCRIPCION = gql`
    mutation UpdateInscripcion($estado: String!) {
        updateInscripcion(
        _id: "61c034cd5951a4cdcdbe0a2a",
        input: {
            estado: $estado
        }){
            _id
        }
    }
`;

const MessageForm = () => {

    const [estado, setEstado] = useState('')


    const [updateInscripcion] = useMutation(CREATE_INSCRIPCION)
    
    return (
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={ async e => {
                            e.preventDefault();
                            await updateInscripcion({variables: {estado}})
                            window.location.href="/"
                        }}>

                            <div className='form-group'>
                                <input type="text" placeholder="Estado" className="form-control" onChange={e => setEstado(e.target.value)} value={estado}/>
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