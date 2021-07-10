import React, { useState } from 'react'
import { Input } from '../Input'
import { useDispatch } from 'react-redux'
import { SearchMoviesStyled } from './styles'
import Vector from '../../assets/icons/Vector.png'

export const SearchMovies = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const filterByName = (e) => {
    setInputValue(e.target.value)
    dispatch({
      type: 'SEARCH_CONTENT',
      payload: e.target.value
    })
  }
  return (
    <SearchMoviesStyled>
      <i className="search"><img src={Vector} alt="" /></i>
      <Input value={inputValue} onChange={filterByName} />
    </SearchMoviesStyled>
  )
}
