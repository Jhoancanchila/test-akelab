import { FormStyled } from './styles'

export const Form = ({ onSubmit, children }) => {

  return (
    <FormStyled onSubmit={onSubmit}>
      {children}
    </FormStyled>
  )
}
