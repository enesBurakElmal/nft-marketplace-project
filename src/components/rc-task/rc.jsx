import React from 'react'

import './style.css'

import Robo from '../../assets/robo1.PNG'
import Logo from '../../assets/logo_menu.png'

const TryComp = () => {
  return (
    <div className="card-test">
      <div className="top-content">
        <img src={Logo} />
      </div>
      <div className="bot-content">
        <div className="left-content"></div>
        <div className="right-content">
          <div className="top-buttons">
            <button className="mint-buttons">-</button>{' '}
            <button className="mint-buttons">1</button>{' '}
            <button className="mint-buttons">+</button>
          </div>
          <p className="coin-p">00.00 AVAX</p>
          <div className="bot-buttons">
            <button className="mint-buttons-bot">MINT</button>
          </div>

          <div className="right-card">
            <div className="right-2">
              <div className="header">
                <img src={Robo} />
                <h1 className="header-rc">Welcome to RoboClash</h1>
              </div>
              <div className="right-p-div">
                <p className="right-p">
                  RoboClash is an NFT-based post-apocalyptic P2E game where
                  Robos, equipped with highly advanced technology and artificial
                  intelligence, fight with each other to win in the arena.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TryComp
