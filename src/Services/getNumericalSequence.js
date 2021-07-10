export const getNumericalSequence = (numero) => {

  let sequence = []

  for (let i = 1; i <= numero; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      sequence.push("akelab")
    }
    else if (i % 3 === 0) {
      sequence.push("ake")
    }
    else if (i % 5 === 0) {
      sequence.push("lab")
    }
    else {
      sequence.push(i)
    }
  }
  return sequence
}