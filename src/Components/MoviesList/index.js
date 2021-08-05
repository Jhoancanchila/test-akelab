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
    if (filteredListByName.length === 0 && state.filterByItem !== '') {
      return state.moviesfilteredByItem
    }
    if (filteredListByName.length > 0) {
      return filteredListByName
    }

    return state.movieList;
  })

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
            return (
              <Movie
                tittle={movie.title}
                key={movie.id}
                coverPage={initialState.images_url + movie.poster_path}
                date={movie.release_date}
                gener={movie.genre_ids}
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
