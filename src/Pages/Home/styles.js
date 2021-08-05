import styled from 'styled-components'

export const HomeStyled = styled.div`
  background-color: #1d2029;
  display:flex;
  flex-direction:column;
  margin:0 auto;
  min-height:100vh;
  min-width:100vh;
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