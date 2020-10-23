import React from 'react'

export default (props) =>{

    return props.endereco.map( item => (
        <>
            <option>{item.nm_rua+" "+item.num_endereco}</option>
        </>
    ))

}