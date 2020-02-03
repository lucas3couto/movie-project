import styled from 'styled-components'

export const IconContainer = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    color: #8F9497;
    position: relative;

    &:focus{
    border-bottom: 2px solid ${props => props.theme.palette.primary.main};
  }

svg{
    position: absolute;
    margin-left: 5px;
    font-size: 25px;
}

`

export const Input = styled.input`
    width: 100%;
  padding: 10px;
  outline: none;
  padding-left: 35px;
  background-color: transparent;
  border: none;
  font-weight: 400;
`