import React from 'react'
import * as S from './styled'

const Button = ({
    type,
    children,
    onClick,
    variant,
    ...props
}) => {

return (
    <S.Button
        type={type}
        onClick={onClick}
        background={props => props.theme.palette.primary.main}
        variant={variant}
    >
        {children}
    </S.Button>
)
}

export default Button