import { ethers } from 'ethers'

import './metamask-auth.module.css'

import { contract_abi } from './erc20-data'

// source__ https://www.freecodecamp.org/news/add-a-metamask-login-to-your-laravel-app/
// source2__ https://betterprogramming.pub/build-a-react-component-for-metamask-auth-10b7ecba5c3f
// php dosya sorulacak

const keccak256 = require('keccak256')

async function metaMaskAuth2() {
  if (!window.ethereum) {
    alert('MetaMask not detected. Please install MetaMask first.')
    return
  }

  console.log(keccak256(Buffer.from('hello')).toString('hex'))

  const provider = new ethers.providers.Web3Provider(window.ethereum)

  let response = await fetch('/web3-login-message')
  const message = await response.text()

  await provider.send('eth_requestAccounts', [])
  const address = await provider.getSigner().getAddress()
  const signature = await provider.getSigner().signMessage(message)

  const appendUserAdressCard = document.createElement('div')
  appendUserAdressCard.classList.add('user-info')

  appendUserAdressCard.innerHTML = `
  <div>
  <h1>Metamask Infos</h1>
  <p>Your Metamask ID <span> ${address}</span></p>
  </div>
  `

  document.body.appendChild(appendUserAdressCard)

  response = await fetch('/web3-login-verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      address: address,
      signature: signature,
      _token: '{{ csrf_token() }}',
    }),
  })
  const data = await response.text()
}

export default metaMaskAuth2
