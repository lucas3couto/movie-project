import React from 'react'
import * as S from './styled'

const Input = ({
    leftIcon,
    onChange,
    name,
    select,
    ...props

}) => {

    return (
        <S.IconContainer>
            {leftIcon && leftIcon()}
            {select && select()}
            <S.Input onChange={onChange} name={name} />
        </S.IconContainer>
    )
}

export default Input 