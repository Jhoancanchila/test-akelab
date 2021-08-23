import React from 'react'
import { Wrapper } from '../../Components/Wrapper'
import { SearchMovies } from '../../Components/SearchMovies'
import { ActionListStyled } from './styles'
import { FilterAction } from '../FilterAction'
import { FilterCheckboxAction } from '../checkboxAction'

export const ActionList = () => {
  return (
    <Wrapper>
      <ActionListStyled>
        <div className="container__action">
          <h5>Películas</h5>
          <SearchMovies />
        </div>
        <FilterCheckboxAction />
        <FilterAction />
      </ActionListStyled>
    </Wrapper>
  )
}
