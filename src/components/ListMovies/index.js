import React from 'react'
import * as S from './styled'
import { Container } from '../grid'

const ListMovies = ({
    children
}) => {

    return (
        <S.List>
            <Container>
               {children}
            </Container>
        </S.List>
    )
}

export default ListMovies