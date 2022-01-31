import React from 'react'
import { Search } from '../../Components/Search'
import styled from 'styled-components'

const FibonacciStyled = styled.div`
  margin:20px 0 0 0;

  .Search__goBack_container {
    padding: 2rem;
  }
`
export const Fibonacci = () => {
  return (
    <FibonacciStyled >
      <Search />
    </FibonacciStyled>
  )
}
