import styled from 'styled-components'

export const MoviesListStyled = styled.div`
  display: grid;
  grid-row-gap: 15px;
  grid-auto-flow: columns;
  grid-column-gap: 10px;
  grid-template-columns: repeat(auto-fill, 375px);
  justify-content: center;
  align-items:center;
  padding:1.5rem 0;
`
