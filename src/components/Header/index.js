import React from 'react'
import * as S from './styled'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/Button'
import { Container } from '../../components/grid'
import { MdSearch } from 'react-icons/md'
import Background from '../../assets/img/background.jpg'

const Header = ({
    handleSearch,
    handleSubmit,
    ...props
}) => {

    const select = (
        <Select name="category" onChange={handleSearch}>
            <option>Filme</option>
            <option>Série</option>
            <option>Ator</option>
        </Select>
    )

    return (
        <S.Header background={Background}>
            <Container>
                <S.Content>
                    <S.Box>
                        <S.HeaderTitle>
                            Procure pelo seu filme, série ou ator preferido.
                        </S.HeaderTitle>
                        <S.HeaderSearch>
                            <Input name="query" select={() => select} onChange={handleSearch} leftIcon={() => <MdSearch />} />
                            <Button onClick={handleSubmit}  variant="primary">Procurar</Button>
                        </S.HeaderSearch>
                    </S.Box>
                </S.Content>
            </Container>
        </S.Header>
    )
}

export default Header