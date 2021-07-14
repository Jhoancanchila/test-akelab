import styled from 'styled-components'

export const MoviesListStyled = styled.div`
  display: grid;
  grid-row-gap: 15px;
  grid-auto-flow: columns;
  grid-column-gap: 10px;
  grid-template-columns:1fr ;
  padding:1em 1em ;

  @media screen and (min-width: 767px) {
      grid-template-columns:1fr 1fr 1fr ;
  }

`
