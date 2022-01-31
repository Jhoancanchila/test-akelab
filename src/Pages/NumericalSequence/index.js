import { useState } from 'react'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { Form } from '../../Components/Form'
import { List } from '../../Components/List'
import { getNumericalSequence } from '../../Services/getNumericalSequence'
import { Error } from '../../Components/Error'
import styled from 'styled-components'
import { WrapperCards } from '../../Components/WrapperCards'
import { GoBack } from '../../Components/GoBack'

const SequenceStyled = styled.div`
  margin:20px 0 0 0;
  .NumericalSecuence__goBack_container {
    padding: 0 0 0 2rem;
  }
`

export const NumericalSequence = () => {
  const [valueInput, setValueInput] = useState('')
  const [sequence, setSequence] = useState([])
  const [error, setError] = useState(false)

  const handleInput = (e) => {
    setValueInput(e.target.value)
  }
  const handleButton = (e) => {
    e.preventDefault()
    if (valueInput >= 1) {
      setError(false)
      setSequence(getNumericalSequence(valueInput))
      setValueInput('')
    } else {
      setError(true)
      setValueInput('')
    }
  }
  return (
    <SequenceStyled>
      <div className="NumericalSecuence__goBack_container">
        <GoBack/>
      </div>
      <Form onSubmit={handleButton} >
        <Input placeholder="Ingresa un número" value={valueInput} onChange={handleInput} />
        <Button text='secuencia' />
      </Form>
      <WrapperCards>
        {
          error ? <Error message='Debes ingresar un número mayor o igual a 1' /> :
            sequence.map((num, index) => <List key={index} num={num} />)
        }
      </WrapperCards>
    </SequenceStyled>
  )
}