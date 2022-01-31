import React from 'react'
import { MovieStyled } from './styles'

export const Movie = ({ tittle, sinopsis, coverPage, date, genres, rating }) => {
  return (
    <MovieStyled >
      <div className='title'>
        <p>{tittle} </p>
      </div>
      <div className="details">
        <div className='container__img'>
          <img loading="lazy" src={coverPage} alt="coverPage" />
        </div>
        <div className='info__movie'>
          <div className='info__movie-sinopsis'>
            <p>{sinopsis}</p>
          </div>
          <div className='info__movie-items'>
            <p><strong>Titulo:</strong> {tittle}</p>
            <p><strong>Calificación:</strong> {rating}</p>
            <p><strong>Genero:</strong> {genres + ' '}</p>
            <p><strong>Fecha de Realización:</strong> {date}</p>
          </div>
        </div>
      </div>
    </MovieStyled>
  )
}
