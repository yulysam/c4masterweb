import React from 'react'
import {gql} from 'apollo-boost'

import {useQuery} from '@apollo/react-hooks'

const GET_MESSAGES = gql`
    {
        Proyectos{
        _id
        nombre
        objetivos
        presupuesto
        fecha_inicio
        fecha_fin
  }
    }
`;

const MessageList = () => {
    const { loading, error, data } = useQuery(GET_MESSAGES)
    if (loading) return <p>Cargando Mensajes...</p>
    if (error) {
        return <p>Error</p>
    }
    return (
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                {
                    data.Proyectos.map( ({_id, nombre, objetivos, presupuesto, fecha_inicio, fecha_fin}) => (
                        <div key={_id} className='card m-2'>
                            <div className='card-body'>
                                <h4>{nombre}</h4>
                                <p>{objetivos}</p>
                                <p>{presupuesto}</p>
                                <p>{fecha_inicio}</p>
                                <p>{fecha_fin}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MessageList;