import React from 'react'
import { Search } from '../../Components/Search'
import styled from 'styled-components'

const FibonacciStyled = styled.div`
  margin:6rem 0 0 0;
`
export const Fibonacci = () => {
  return (
    <FibonacciStyled >
      <Search />
    </FibonacciStyled>
  )
}
