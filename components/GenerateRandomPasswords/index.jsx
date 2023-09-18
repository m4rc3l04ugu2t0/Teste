//import React from 'react'

const numberRandom = (min, max) => Math.floor(Math.random() * (min - max) + max)
  
const passwordCapitalLetters = () => String.fromCharCode(numberRandom(65, 90))
const lowercasePassword = () => String.fromCharCode(numberRandom(97, 122))
const numberPassword = () => String.fromCharCode(numberRandom(48, 58))
const passwordSymbols = '+×÷=/_€£¥₩!@#$%^&*()-:;?,~\|<>{}◇]°•○●□■♤♡◇♧☆▪︎¤《》¡¿'
  
const generatePasswordSymbols = () => {
  return passwordSymbols[numberRandom(0, passwordSymbols.length)]
}

export const generateRandomPassword = (characters, numbers, capitalLetters, lowercase, symbols  ) => {
  if (characters > 20) return 'Máximo de 20 caracteres!'
  
  const password = []
    
  for (let i = 0; i < characters; i++) {
    capitalLetters && password.push(passwordCapitalLetters())
    lowercase && password.push(lowercasePassword())
    numbers && password.push(numberPassword())
    symbols && password.push(generatePasswordSymbols())
  }
  
  return password.join('').slice(0, characters) || 'Selecione alguma opção!'
}


