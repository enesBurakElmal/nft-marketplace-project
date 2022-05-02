import React from 'react'

import './card-buttons.styles.css'

import { addCard, removeCard } from '../card-list/scripts'

export const CardButtons = () => {
  return (
    <div className="card-buttons">
      <button className="card-button" onClick={addCard}>
        Add Card
      </button>
      <button className="card-button" onClick={removeCard}>
        Delete Card
      </button>
      <div>
        <button className="card-button"> Debugger</button>
      </div>
    </div>
  )
}
