import styled from 'styled-components'

export const SearchMoviesStyled = styled.div`
  display: flex;
  position: relative;
  .search {
    position: absolute;
    right: 1em;
    border-radius: 50%;
    border: none;
    img{
    width:10px;
    height:10px
    }
  }

  @media screen and (max-width: 770px) {
    .search{
      display:none
    }
  }
`