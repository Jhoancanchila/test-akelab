import { InputStyled } from './styles'

export const Input = ({ ...props }) => {
  return (
    <InputStyled>
      <input type="text" {...props} />
    </InputStyled>
  )
}