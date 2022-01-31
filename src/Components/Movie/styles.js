import styled from 'styled-components'

export const MovieStyled = styled.div`
  background:#FFFFFF;
  border: 1.5px solid #4F4F4F;
  border-radius: 16px;
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  width:475px;
  height: 345px;

  cursor: pointer;

  padding: 20px;

  .title {
    text-align: left;
    padding: 0;

    & p{
      font-family: Futura LT;
      font-style: normal;
      font-weight: 800;
      font-size: 14px;
      line-height: 19px;
      display: flex;
      align-items: center;
      letter-spacing: 0.03em;
      color: #3F3F3F;
      margin: 0 0 10px 0;
    }
  }

  .details {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  .container__img {
    height: 270px;
    width:180px;

      & img {
        width: 100%;
        height: 100%
      }
  }
  .info__movie {
    width: 230px;
    height: 270px;
    margin: 0 0 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .info__movie-sinopsis {
    text-align: left;
    height: 155px;

    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: pre-line;

    & p {
      font-family: Futura LT;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 17px;

      color: #6D6E70;
    }
  }

  .info__movie-items {
    text-align: left;

    & p {
      font-family: Futura LT;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      
      color: #6D6E70;
      margin: 0;
      & strong {
        font-weight: 800;
      }
    }
  }
`