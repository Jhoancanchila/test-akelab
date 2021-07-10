import React from 'react'
import { ErrorStyled } from './styles'

export const Error = ({ message }) => {
  return (
    <ErrorStyled className="alert alert-danger col-md-4 ">
      {message}
    </ErrorStyled>
  )
}
