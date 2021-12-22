import React from 'react'
import {gql} from 'apollo-boost'

import {useQuery} from '@apollo/react-hooks'

const GET_INSCRPCIONS = gql`
    {
Inscripcions {
    _id
    proyecto
    estudiante
    estado
    fecha_egreso
    fecha_ingreso
  }
}
`;

const MessageList = () => {
    const { loading, error, data } = useQuery(GET_INSCRPCIONS)
    if (loading) return <p>Cargando Mensajes...</p>
    if (error) {
        return <p>Error</p>
    }
    return (
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                {
                    data.Inscripcions.map( ({_id, proyecto, estudiante, estado, fecha_egreso, fecha_ingreso}) => (
                        <div key={_id} className='card m-2'>
                            <div className='card-body'>
                                <h4>{proyecto}</h4>
                                <p>{estudiante}</p>
                                <p>{estado}</p>
                                <p>{fecha_egreso}</p>
                                <p>{fecha_ingreso}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MessageList;