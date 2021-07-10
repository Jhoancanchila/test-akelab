import styled from 'styled-components'

export const InputStyled = styled.label`
  display: inline-flex;
  background: white;
  border:1px solid #6D6E70;
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
  padding: 0 2rem;
  border-radius: 10px;
  flex: 1;
  max-width:15rem;
  input {
    flex: 1;
    border: none;
    height: 28px;
    line-height: 48px;
    font-size: .8em;
    outline: 0;
    color: #111517;
    background: white;
    &::-webkit-input-placeholder {
      color: #C4C4C4;
    }
  }
  
`