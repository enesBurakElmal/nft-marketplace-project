import React, { useState } from 'react'

import './card-list.styles.css'

import Card from '../card-paginant/cards-index.component'

import CardContent from '../card-content/card-content'

import TryComp from '../rc-task/rc.jsx'

export const CardListComponent = () => {
  return (
    <div className="card-body">
      <CardContent />
      <Card />
      <TryComp />
    </div>
  )
}

export default CardListComponent
