import React from 'react'
import { ListFibonacciStyled } from './styles'

export const List = ({ num }) => {
  return (
    <ListFibonacciStyled>
      <article className='card__grid'>
        <div>
          <span>  {num}</span>
        </div>
      </article>

    </ListFibonacciStyled>
  )
}
