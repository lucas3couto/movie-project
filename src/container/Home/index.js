import React, { useState } from 'react'
import * as S from './styled'
import ListMovies from '../../components/ListMovies'
import config from '../../services/api'
import axios from 'axios'
import Header from '../../components/Header'
import { Col } from '../../components/grid'
import MovieCard from '../../components/MovieCard'
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {

    const [results, setResults] = useState()
    const [query, setQuery] = useState()
    const [category, setCategory] = useState('Filme')

    const getMovies = () => {
        axios.get(config.apiUrl.search, {
            params: {
                query: query,
                api_key: config.apiKey,
                language: config.language
            }
        })
            .then(res => {
                setResults(res.data)
            })
            .catch(e => console.log(e))
    }

    
    const getTv = () => {
        axios.get(config.apiUrl.searchTv, {
            params: {
                query: query,
                api_key: config.apiKey,
                language: config.language
            }
        })
            .then(res => {
                setResults(res.data)
            })
            .catch(e => console.log(e))
    }

    const getPerson = () => {
        axios.get(config.apiUrl.searchPerson, {
            params: {
                query: query,
                api_key: config.apiKey,
                language: config.language
            }
        })
            .then(res => {
                setResults(res.data)
            })
            .catch(e => console.log(e))
    }


    const handleSearch = e => {
        const { value, name } = e.target
        if (name === 'query') {
            setQuery(value)
        } else if (name === 'category') {
            setCategory(value)
        }
    }

    const getMore = () => {
        if (results.page < results.total_pages) {
            axios.get(config.apiUrl.search, {
                params: {
                    query: query,
                    api_key: config.apiKey,
                    language: config.language,
                    page: results.page + 1
                }
            })
                .then(response => {
                    const moreResults = results.results.concat(response.data.results);
                    setResults({
                        results: moreResults,
                        page: response.data.page,
                        total_results: response.data.total_results,
                        total_pages: response.data.total_pages
                    });
                });
        }
    }

    const handleSubmit = () => {
        if (!query) {
        } else {
            switch (category) {
                case 'Filme':
                    return getMovies()
                case 'Série':
                    return getTv()
                case 'Ator':
                    return getPerson()
                default:
                    return
            }
        }
    }


    return (
        <S.Home>
            <Header handleSearch={handleSearch} handleSubmit={handleSubmit} />
            {results && (
                <ListMovies>
                    <InfiniteScroll
                        dataLength={results.results.length}
                        pageStart={0}
                        next={getMore}
                        hasMore={true}
                    >
                        {results.results.map(({
                            id,
                            title,
                            overview,
                            poster_path,
                            release_date,
                            vote_average,
                            name,
                            first_air_date,
                            profile_path,
                            known_for_department

                        }) => (
                                <Col mobile={12} tablet={6} desktop={3} key={id} >
                                    <MovieCard
                                        id={id}
                                        title={title || name}
                                        description={overview}
                                        image={poster_path || profile_path}
                                        category={category}
                                        release={release_date || first_air_date}
                                        average={vote_average}
                                        results={results.results}
                                        department={known_for_department}
                                    />
                                </Col>
                            ))}
                    </InfiniteScroll>
                </ListMovies>
            )}
        </S.Home>
    )
}

export default Home