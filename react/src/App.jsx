import { useState } from 'react'
import './App.css'
import data from './components/data'
import Navbar from './components/Navbar'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  const cards = data.map(item => {
    return(
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className='app'>
      <Navbar />
      
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
}

export default App
