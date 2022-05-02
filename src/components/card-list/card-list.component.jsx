import React, { useState } from 'react'

import './card-list.styles.css'

import Card from '../card-paginant/card-paginant'

export const CardListComponent = (itemsPerPage) => {
  return (
    <div className="card-body">
      <Card />
    </div>
  )
}

export default CardListComponent
