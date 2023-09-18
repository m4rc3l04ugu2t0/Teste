import React from 'react'
import { useState } from 'react'

import { generateRandomPassword } from '/components/GenerateRandomPasswords/index.jsx'

import { Header } from '/components/Header/index.jsx'
import { Label } from '/components/Label/index.jsx'
import { Button } from '/components/Button/index.jsx'

export const App = () => {
  const [ characters, setCharacters ] = useState(8)
  
  const [ numbers, setNumbers ] = useState(false)
  const [ capital, setCapital ] = useState(false)
  const [ lowercase, setLowercase ] = useState(false)
  const [ symbols, setSymbols ] = useState(false)
  
  const [ password , setPassword ] = useState(false)
  
  const handleClick = () => {
    setPassword(true)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <div className="container">
      <Header/>
      <main>
        <section>
          <h2>{ password ? generateRandomPassword(characters, numbers, capital, lowercase, symbols) : 'Sua senha apareceráaqui!' }</h2>
        </section>
        <form onSubmit={ handleSubmit }>
          <div className="container-inputs">
            <Label text="Número de caracteres: " id="number-characters"/>
            <input type="number" id="number-characters" max="20" value={ characters }
            onChange={e => setCharacters(e.target.value) }
            />
          </div>
          <div className="container-inputs">
            <Label text="Adicionar números: " id="add-numbers" />
            <input type="checkbox" id="add-numbers" onChange={ e => setNumbers(e.target.checked) } />
          </div>
          <div className="container-inputs">
            <Label id="add-capital-letters" text="Adicionar letras maiusculas: "  />
            <input type="checkbox" id="add-capital-letters" onChange={ e => setCapital(e.target.checked) } />            
          </div>
          <div className="container-inputs">
            <Label id="add-lowercase-letters" text="Adicionar letras minúsculas: " />
            <input type="checkbox" id="add-lowercase-letters" onChange={ e => setLowercase(e.target.checked) } />
          </div>
          <div className="container-inputs">
            <Label id="add-symbols" text="Adicionar símbolos: " />
            <input type="checkbox" id="add-symbols" onChange={e => setSymbols(e.target.checked) } />
          </div>
          { !password && <Button click={ handleClick }/>}
        </form>
      </main>
    </div>
  )
}