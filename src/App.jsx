import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Footer from './components/Footer'
import Header from './components/Header'
import Lists from './components/Lists'

function App() {
  const [theme, setTheme] = useState("dark");

  function changeTheme(event){
    console.log("Theme changed!",event.target.value);
    setTheme(event.target.value)
  }

  return (
    <>
      <Header theme={theme} />
      <Button text="Hello" />
      <Button text="Go there" />
      <Button text="Bye" />
      <Lists />
      <div>
        <h2>Select the mode of the footer and header</h2>
        <select onChange={changeTheme} name="theme" id="">
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>

      <Footer theme={theme}/>
    </>
  )
}

export default App
