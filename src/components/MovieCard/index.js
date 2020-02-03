import React, { useState } from 'react'
import * as S from './styled'
import Default from '../../assets/img/default.png'
import axios from 'axios'
import config from '../../services/api'

const MovieCard = ({
    id,
    title,
    description,
    image,
    release,
    average,
    item,
    category,
    results,
    department

}) => {

    const [onId, setOnId] = useState()

    const getMovieById = (id) => {
        axios.get(`${config.apiUrl.movieId}/${id}`, {
            params: {
                api_key: config.apiKey,
                language: config.language
            }
        })
            .then(res => setOnId(res.data))
            .catch(e => console.log(e.response.data))
    }

    const getTvById = (id) => {
        axios.get(`${config.apiUrl.tvId}/${id}`, {
            params: {
                api_key: config.apiKey,
                language: config.language
            }
        })
            .then(res => setOnId(res.data))
            .catch(e => console.log(e.response.data))
    }

    const getPersonById = (id) => {
        axios.get(`${config.apiUrl.personId}/${id}`, {
            params: {
                api_key: config.apiKey,
                language: config.language
            }
        })
            .then(res => setOnId(res.data))
            .catch(e => console.log(e.response.data))

        axios.get(`${config.apiUrl.personId}/${id}/movie_credits`, {
            params: {
                api_key: config.apiKey,
                language: config.language
            }
        })
            .then(res => setOnId(res.data))
            .catch(e => console.log(e.response.data))
    }

    const handleMovie = (id) => {
        switch (category) {
            case 'Filme':
                return getMovieById(id)
            case 'Série':
                return getTvById(id)
            case 'Ator':
                return getPersonById(id)
            default:
                return
        }
    }

    const [visible, setVisible] = useState(false)

    const toDateBRL = (value) => {
        const date = new Date(value)
        return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    }

    const getAge = (date) => {

        const today = new Date();
        const birthDate = new Date(date);
        var age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }

        return age;
    }


    const handleClick = () => {
        handleMovie(id)
        setVisible(!visible)
    }

    const lastJob = department === 'Acting' && onId && onId.cast && onId.cast.reduce((a, b) => {
        return a.release_date > b.release_date ? a : b
    });

    const data = () => {

        switch (category) {
            case 'Filme':
                return (
                    <S.Details>
                        <S.Info>
                            <span>Nome: </span>{title}
                        </S.Info>
                        <S.Info>
                            <span>Lançamento: </span>{toDateBRL(release)}
                        </S.Info>
                        <S.Info>
                            <span>Avaliação: </span>{average}
                        </S.Info>
                    </S.Details>
                )
            case 'Série':
                return (
                    <S.Details>
                        <S.Info>
                            <span>Nome: </span>{title}
                        </S.Info>
                        <S.Info>
                            <span>Lançamento: </span>{toDateBRL(release)}
                        </S.Info>
                        <S.Info>
                            <span>Temporadas: </span>{onId && onId.number_of_seasons}
                        </S.Info>
                    </S.Details>
                )
            case 'Ator':
                return (
                    <S.Details>
                        <S.Info>
                            <span>Nome: </span>{title}
                        </S.Info>
                        <S.Info>
                            <span>Idade: </span>{onId && onId.birthday && getAge(onId.birthday)}
                        </S.Info>
                        <S.Info>
                            <span>Último Trabalho: </span>{onId && lastJob && lastJob.title}
                        </S.Info>
                    </S.Details>
                )
            default:
                return
        }
    }

    const step = {
        component: data
    }

    const urlImage = `https://image.tmdb.org/t/p/w500${image}`
    return (
        <S.Card onClick={handleClick} image={urlImage}>
            <S.Image src={image ? urlImage : Default} />
            <S.Content>
                <S.Title>
                    {`Título: ${title}`}
                </S.Title>
                <S.Description>
                    <span>Descrição: </span>{description || 'Sem descrição'}
                </S.Description>
            </S.Content>
            {visible && <step.component />}
        </S.Card>
    )
}

export default MovieCard