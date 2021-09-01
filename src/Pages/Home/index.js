import React from 'react'
import { Link } from 'react-router-dom'
import { HomeStyled } from './styles'

export const Home = () => {
  return (
    <HomeStyled>
      <div>
        <h2>Prueba <p>AKE</p><div><i>lab</i></div></h2>
      </div>
      <div className='wraper__card'>
        <Link to="/fibonacci">
          <article>
            <h2>Fibonacci</h2>
          </article>
        </Link>
        <Link to="/secuencia-numerica">
          <article>
            <h2>Akelab</h2>
          </article>
        </Link>
        <Link to="/movies">
          <article>
            <h2>Movies</h2>
          </article>
        </Link>
      </div>
    </HomeStyled>
  )
}
