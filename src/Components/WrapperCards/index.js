import React from 'react'
import { WrapperGridStyled } from './styles'

export const WrapperCards = ({ children }) => {
  return (
    <WrapperGridStyled>
      {children}
    </WrapperGridStyled>
  )
}
