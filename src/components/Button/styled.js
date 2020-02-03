import styled from 'styled-components'

export const Button = styled.button`
    height: 35px;
    border-radius: 5px;
    font-weight: 800;
    background-color: ${props => (props.variant === 'primary' ? props => props.theme.palette.primary.main : '')};
    color: ${props => (props.variant === 'primary' ? '#fff' : '')};

    &:hover{
        opacity: 0.9;
    }
`