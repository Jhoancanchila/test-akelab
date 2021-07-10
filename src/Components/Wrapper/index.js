import React from 'react'
import { WrapperStyled } from './styles'

export const Wrapper = ({ children }) => {
  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
  )
}