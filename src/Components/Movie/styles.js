import styled from 'styled-components'

export const MovieStyled = styled.div`
  text-align: left;
  background:#FFFFFF;
  border: 1.5px solid #4F4F4F;
  border-radius: 16px;
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
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
    padding:.5em 1em 0 ;
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
    font-size: .9em;
    margin-bottom: .5rem;
  }

`