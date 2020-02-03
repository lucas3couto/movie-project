import styled from 'styled-components'

export const Card = styled.div`
    width: 100%;
    position: relative;
    flex-direction: column;

    &:hover{
        cursor: pointer;
    }
`

export const Image = styled.img`
    width: 100%;
`

export const Details = styled.div`
    position: absolute;
    width: 100%;
    background-color: #000;
    opacity: 0.9;
    color: #fff;
    padding: 15px;
    justify-content: flex-start;
`

export const Content = styled.div`
    flex-direction: column;
    margin-top: 25px;
    display: ${props => props.display};
`

export const Title = styled.h1`
    font-size: 1em;
    margin-bottom: 10px;
`

export const Description = styled.p`
    font-size: 0.6em;
    margin-bottom: 10px;
    span{
        font-weight: 600;
    }
`

export const Info = styled.p`
    color: #fff;
    font-size: 1em;
    width: 100%;
    margin-bottom: 10px;

    span{
        font-weight: 600;
    }
`