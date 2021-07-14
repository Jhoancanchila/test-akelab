import React from 'react'
import { Wrapper } from '../../Components/Wrapper'
import { SearchMovies } from '../../Components/SearchMovies'
import { ActionListStyled } from './styles'
import { FilterAction } from '../FilterAction'

export const ActionList = () => {
  return (
    <Wrapper>
      <ActionListStyled>
        <div className="container__action">
          <h5>Películas</h5>
          <SearchMovies />
        </div>
        <FilterAction />
      </ActionListStyled>
    </Wrapper>
  )
}
