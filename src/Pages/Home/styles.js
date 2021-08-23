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
    display:grid;
    grid-gap:5rem;
    grid-template-columns: repeat(3, 1fr);
    align-items:center;
    justify-content:center;
    margin:2rem 2rem 0;
  }
  article{
    align-items:center;
    border:1px solid white;
    cursor:pointer;
    display:flex;
    justify-content:center;
  }
  h1{
    font-size:6rem;
  }
   a{
      text-decoration:none;
      color:white
    }

    @media screen and (max-width: 375px) {

    .wraper__card{
       grid-template-columns:repeat(auto-fit,minmax(350px,1fr));
       margin:2rem 11rem 0;
    }
    h1{
      font-size:4rem;
    }
  }
`