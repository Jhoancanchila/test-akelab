import React from 'react'
import { MoviesStyled } from './styles'
import { ActionList } from '../../Components/ActionList'
import { MoviesList } from '../../Components/MoviesList'

export const Movies = () => {
  return (
    <MoviesStyled>
      <ActionList />
      <MoviesList />
    </MoviesStyled>
  )
}
