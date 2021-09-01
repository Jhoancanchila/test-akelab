import styled from 'styled-components'

export const HomeStyled = styled.div`
  background-color: #1d2029;
  display:flex;
  flex-direction:column;
  margin:0 auto;
  min-height:100vh;
  color :white;
  .wraper__card{
    display:grid;
    grid-gap:5rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 3fr));
    align-items:center;
    justify-content:center;
    padding:2rem
  }
  article{
    align-items:center;
    border:1px solid white;
    cursor:pointer;
    display:flex;
    justify-content:center;
  }
  h2{
    display:flex;
    justify-content:center;
    font-size:5rem;
    p{
     color:#7F3F97;
    padding-left:2rem
    }
    div{
      display:flex;
      align-items:flex-start;
      padding-top:.8rem;
      padding-left:.2rem
    }
     i{
      font-size:3rem;
      color:#F66731
       }
  }
  a{
      text-decoration:none;
      color:white
  }

    @media screen and (max-width: 375px) {
      padding:2rem;
      .wraper__card{
        grid-gap:2rem
      }
    h2{
      font-size:3rem;
      p{
        padding-left:1rem
      }
      i{
        font-size:2rem
       }
      }
`