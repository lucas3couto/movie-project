import React from 'react'
import * as S from './styled'

const Select = ({
    name,
    onChange,
    children,
    ...props
}) => {

    return(
        <S.Select name={name} onChange={onChange} type="select">
            {children}            
        </S.Select>
    )
}

export default Select