import styled from 'styled-components'

export const MovieStyled = styled.div`
  text-align: left;
  background:#FFFFFF;
  border: 1px solid #4F4F4F;
  border-radius: 16px;
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  width:375px;
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    vertical-align: top;
  }
  .tittle {
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 1em;
    text-align:center;
    p{
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;
  }
  }
  .details {
    background: #FFFFFF;
  }
  .info__movie{
    margin:1em 0
  }
  .info__movie-sinopsis{
    text-align: left;
    p{
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 17px;
      color: #6D6E70;
    }
  }
  p {
    font-size: 12px;
    margin: 0;
  }

  @media screen and (min-width: 767px){
    height:auto;
    width:430px;
    overflow:hidden;
    .details {
    display:flex;
    height:auto;
    justify-content:space-around
  }
  .container__img {
    height:270px;
    width:160px;

    img{
      height:100%;
      width:100%;
    }
  }
  .info__movie{
    height:auto;
    width:233px;
    margin:10px
  }
  }
`