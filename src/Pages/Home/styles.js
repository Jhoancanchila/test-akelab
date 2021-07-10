import styled from 'styled-components'

export const HomeStyled = styled.div`
  display:flex;
  flex-direction:column;
  margin:0 auto;
  color :white;
  .wraper__card{
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:2rem;
  }
  article{
    align-items:center;
    border:1px solid white;
    cursor:pointer;
    display:flex;
    height:10rem;
    justify-content:center;
    margin:0 3rem;
    width:10rem;
  }
  h1{
    font-size:6rem;
  }
   a{
      text-decoration:none;
      color:white
    }
`