import React, { useEffect } from 'react'
import { Wrapper } from '../Wrapper'
import { Movie } from '../Movie'
import { MoviesListStyled } from './styles'
import { initialState } from '../../json/Movies'
import { useSelector, useDispatch } from 'react-redux'


export const MoviesList = () => {

  const dispatch = useDispatch()
  const filteredListByName = useSelector(state => state.filteredListByName)
  const functionSort = useSelector(state => state.functionSort)

  const movieList = useSelector((state) => {
    if (filteredListByName.length > 0) {
      return filteredListByName
    }
    if (state.filterByGender.length > 0) {
      return state.filterByGender
    }
    return state.movieList;
  })

  useEffect(() => {
    dispatch({
      type: 'SET_MOVIES_LIST',
      payload: initialState.results
    })
  }, [dispatch])
movieList.sort(functionSort)
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
                genres={movie.genre_ids.map(genreId => {
                  const genres = initialState.genres.filter(item => item.id === genreId)
                  return genres[0].name
                })}
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
