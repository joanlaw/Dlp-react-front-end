import React from 'react'
import ReactTooltip from 'react-tooltip'
import Header from './Header'

export default function Tooltips() {
  return (
    <div>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1>Este es el tooltip</h1>


        <button data-tip data-for="tooltipsdlp" >Hola decks</button>

        <ReactTooltip id="tooltipsdlp"  place="right"   >
        Este es el tooltip
        </ReactTooltip>
    </div>
  )
}
