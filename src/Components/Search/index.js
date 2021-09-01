import { useState } from 'react'
import { Input } from '../Input'
import { Button } from '../Button'
import { Form } from '../Form'
import { List } from '../List'
import { Error } from '../Error'
import { getFibonacciSecuence } from '../../Services/getFibonacciSequence'
import { WrapperCards } from '../WrapperCards'

export const Search = () => {
  const [valueInput, setValueInput] = useState('')
  const [fibo, setFibonacci] = useState([])
  const [error, setError] = useState(false)

  const handleInput = (e) => {
    setValueInput(e.target.value)
  }
  const handleButton = (e) => {
    e.preventDefault()
    if (valueInput >= 1) {
      setError(false)
      setFibonacci(getFibonacciSecuence(valueInput))
      setValueInput('')
    } else {
      setError(true)
      setValueInput('')
    }
  }
  return (
    <>
      <Form onSubmit={handleButton} >
        <Input placeholder="ingresa un número" value={valueInput} onChange={handleInput} />
        <Button text='Fibonacci' />
      </Form>
      <WrapperCards>
        {
          error ? <Error message='Debes ingresar un número mayor o igual a 1' /> :
            fibo.map((num, index) => <List key={index} num={num} />)
        }
      </WrapperCards>
    </>
  )
}