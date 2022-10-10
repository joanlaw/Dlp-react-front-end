import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Decksmeta = () => {
  return (
    <div>
        <Header />
        <h1 className='searchmargen'>Decks meta</h1>
        <p><Link to='/decks-meta/prueba' > Deck de prueba</Link></p>
    </div>
  )
}

export default Decksmeta