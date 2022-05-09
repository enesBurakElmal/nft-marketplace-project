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

import LoginComponent from './components/login-component/login-component'
import CardListComponent from './components/card-list/card-list.component'
import Apps from './components/login-auth/ethers-type-login'
import NavbarComponent from './components/navbar/navbar-component'

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <AppContainer>
        {/* <LoginComponent /> */}
        <CardListComponent />
        {/* <Apps /> */}
      </AppContainer>
    </div>
  )
}

export default App
