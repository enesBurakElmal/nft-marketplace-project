import React, { useState } from 'react'

import './card-list.styles.css'

import Card from '../card-paginant/card-paginant'

import CardContent from '../card-content/card-content'

export const CardListComponent = (itemsPerPage) => {
  return (
    <div className="card-body">
      <CardContent />
      <Card />
    </div>
  )
}

export default CardListComponent
