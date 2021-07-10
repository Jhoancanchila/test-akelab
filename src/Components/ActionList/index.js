import React from 'react'
import { Wrapper } from '../../Components/Wrapper'
import { SearchMovies } from '../../Components/SearchMovies'
import { ActionListStyled } from './styles'

export const ActionList = () => {
  return (
    <ActionListStyled>
      <Wrapper>
        <div className="grid">
          <h5>Películas</h5>
          <SearchMovies />
        </div>
      </Wrapper>
    </ActionListStyled>
  )
}
