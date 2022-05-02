import React from 'react'

import LoginComponent from './components/login-component/login-component'

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

function App() {
  return (
    <div className="App">
      <AppContainer>
        <LoginComponent />
        <CardListComponent />
      </AppContainer>
    </div>
  )
}

export default App
