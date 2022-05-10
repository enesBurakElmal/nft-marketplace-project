import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import {
  AppContainer,
  DivList,
  DivListItem,
  Paragraph,
  ButtonList,
  Button,
  DivListLeft,
  DivListRight,
} from './AppElements'

import './App.css'

import CardListComponent from './components/card-list/card-list.component'
import NavbarComponent from './components/navbar/navbar-component'
import FooterComponent from './components/footer/footer-component'

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <AppContainer>
        <CardListComponent />
      </AppContainer>
      <FooterComponent />
    </div>
  )
}

export default App
