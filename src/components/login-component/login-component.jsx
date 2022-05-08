import React from 'react'
import Tilt from 'react-tilt'

import MetaMaskAuth from '../login-auth/web3-type-login'
import metaMaskAuth2 from '../login-auth/ethers-type-login'
import as_ from '../login-auth/firebase-type-login'

import MetamaskLogo from '../../assets/metamask.svg'

const LoginComponent = () => {
  return (
    <div>
      <div className="button-list">
        <Tilt
          className="Tilt br2 shadow-2"
          options={{ max: 35 }}
          style={{ height: 180, width: 180 }}
        >
          <img
            src={MetamaskLogo}
            alt="meta mask logo"
            style={{ width: '180px', height: '180px' }}
            className="metamask-logo"
          />
        </Tilt>
        <br />
        {/* <button className="card-button-meta" onClick={as_}>
          Firebase Type Login
        </button> */}
        <br />
        <button className="card-button-meta" onClick={metaMaskAuth2}>
          Ethers Type Login
        </button>
        <MetaMaskAuth />
      </div>
    </div>
  )
}

export default LoginComponent
