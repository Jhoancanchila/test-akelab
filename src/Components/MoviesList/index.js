import React, { useEffect } from 'react'
import { Wrapper } from '../Wrapper'
import { Movie } from '../Movie'
import { MoviesListStyled } from './styles'
import { initialState } from '../../json/Movies'
import { useSelector, useDispatch } from 'react-redux'


export const MoviesList = () => {
  const dispatch = useDispatch()
  const filteredListByName = useSelector(state => state.filteredListByName)

  const movieList = useSelector((state) => {
    if (filteredListByName.length === 0 && state.filterByItem !== '' && state.filterByGender.length === 0) {
      return state.moviesfilteredByItem
    }
    if (filteredListByName.length > 0) {
      return filteredListByName
    }
    if (state.filterByGender.length > 0) {
      return state.filterByGender
    }

    return state.movieList;
  })
  console.log(movieList)

  useEffect(() => {
    dispatch({
      type: 'SET_MOVIES_LIST',
      payload: initialState.results
    })
  }, [dispatch])

  return (
    <Wrapper>
      <MoviesListStyled>
        {
          movieList.map((movie) => {
            const idGeneros = movie.genre_ids
            const cargarGeneros = idGeneros.map(element => {
              const genres = initialState.genres.map(genre => genre)
              const genero = genres.filter(movie => movie.id === element)
              const genreName = genero.map(item => item.name)
              return genreName
            })

            return (
              <Movie
                tittle={movie.title}
                key={movie.id}
                coverPage={initialState.images_url + movie.poster_path}
                date={movie.release_date}
                genres={cargarGeneros}
                rating={movie.vote_average}
                sinopsis={movie.overview}
              />
            )
          })
        }
      </MoviesListStyled>
    </Wrapper>
  )
}
