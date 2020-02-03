import styled from 'styled-components'

export const Header = styled.div`
    height: 350px;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
export const Content = styled.div`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const Box = styled.div`
    max-width: 400px;
    flex-direction: column;
`

export const HeaderTitle = styled.h1`
    text-align: center;
    color: #fff;

    span{
        color: ${props => props.theme.palette.primary.main}
    }
`
export const HeaderSearch = styled.div`
    margin-top: 15px;
    flex-direction: column;
    justify-content: space-between;
    height: 80px;
`

export const Search = styled.div`
    flex-direction: column;
`

export const SearchTitle = styled.h1`
    color: #fff;
    font-size: 1.2em;
    margin-bottom: 15px;
`