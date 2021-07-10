import styled from 'styled-components'

export const ActionListStyled = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  @media screen and (min-width: 768px) {
    .grid {
      display:flex;
      flex-direction:column;
      align-items:start;
      margin-left:5rem ;
      h5{
        margin-top:10px
      }
    }
  }
`