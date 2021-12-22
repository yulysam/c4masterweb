import React from 'react'
import {gql} from 'apollo-boost'

import {useQuery} from '@apollo/react-hooks'

const GET_USER = gql`
    {
  Users {
    _id
    identificacion
    nombre
    apellido
    rol_aspiro
    rol
    estado
  }
}
`;

const MessageList = () => {
    const { loading, error, data } = useQuery(GET_USER)
    if (loading) return <p>Cargando Mensajes...</p>
    if (error) {
        return <p>Error</p>
    }
    return (
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                {
                    data.Users.map( ({_id, identificacion, nombre, apellido, rol, rol_aspiro, estado}) => (
                        <div key={_id} className='card m-2'>
                            <div className='card-body'>
                                <h4>{nombre+" "+apellido}</h4>
                                <p>{identificacion}</p>
                                <p>{rol_aspiro}</p>
                                <p>{rol}</p>
                                <p>{estado}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MessageList;