import React from 'react'
import { Link } from 'react-router-dom'
import { HomeStyled } from './styles'

export const Home = () => {
  return (
    <HomeStyled>
      <div>
        <h1>Ejercicios</h1>
      </div>
      <div className='wraper__card'>
        <Link to="/fibonacci">
          <article>
            <h1>1</h1>
          </article>
        </Link>
        <Link to="/secuencia-numerica">
          <article>
            <h1>2</h1>
          </article>
        </Link>
        <Link to="/movies">
          <article>
            <h1>3</h1>
          </article>
        </Link>
      </div>
    </HomeStyled>
  )
}
