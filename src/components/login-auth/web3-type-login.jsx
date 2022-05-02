import { useState, useEffect } from 'react'
import Web3 from 'web3'

import { ContractABI } from './erc20-data'

import '../card-buttons/card-buttons.styles.css'


function MetaMaskAuth() {
  const [isConnected, setIsConnected] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [query, setQuery] = useState('')
  const [click, setClick] = useState(false)

  useEffect(() => {
    function checkConnectedWallet() {
      const userData = JSON.parse(localStorage.getItem('userAccount'))
      if (userData != null) {
        setUserInfo(userData)
        setIsConnected(true)
      }
    }
    checkConnectedWallet()
  }, [])

  const detectCurrentProvider = () => {
    let provider
    if (window.ethereum) {
      provider = window.ethereum
    } else if (window.web3) {
      // eslint-disable-next-line
      provider = window.web3.currentProvider
    } else {
      console.log(
        'Non-Ethereum browser detected. You should consider trying MetaMask!'
      )
    }
    return provider
  }

  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider()
      if (currentProvider) {
        if (currentProvider !== window.ethereum) {
          console.log(
            'Non-Ethereum browser detected. You should consider trying MetaMask!'
          )
        }
        await currentProvider.request({ method: 'eth_requestAccounts' })
        const web3 = new Web3(currentProvider)
        const userAccount = await web3.eth.getAccounts()
        const chainId = await web3.eth.getChainId()
        const address = userAccount[0]

        let ethBalance = await web3.eth.getBalance(address)
        ethBalance = web3.utils.fromWei(ethBalance, 'ether')

        const contractAddress = '0xdf7008BF604887c401f01c584EFDD2e8A903F3Bc'
        const daiToken = new web3.eth.Contract(
          ContractABI, // ABI
          contractAddress
        )

        daiToken.methods
          .RandomNumber(contractAddress)
          .call()
          .then(function (result) {
            console.log('randNumber: ', result)
          })
          .catch(function (err) {
            console.log(err, 'err')
          })

        daiToken.methods
          .User_s_NFTs(address)
          .call()
          .then(function (result) {
            console.log("myNft's: ", result)
          })
          .catch(function (err) {
            console.log(err, 'err')
          })

        daiToken.methods
          .totalSupply()
          .call()
          .then(function (result) {
            console.log('totalSupply: ', result)
          })
          .catch(function (err) {
            console.log(err, 'err')
          })

        saveUserInfo(ethBalance, address, chainId)
        if (userAccount.length === 0) {
          console.log('Please connect to meta mask')
        }
      }
    } catch (err) {
      console.log(
        'There was an error fetching your accounts. Make sure your Ethereum client is configured correctly.'
      )
    }
  }

  const onDisconnect = () => {
    window.localStorage.removeItem('userAccount')
    setUserInfo({})
    setIsConnected(false)
  }

  const saveUserInfo = (ethBalance, account, chainId, ethKeccak256) => {
    const userAccount = {
      account: account,
      balance: ethBalance,
      connectionid: chainId,
      keccak256: ethKeccak256,
    }

    window.localStorage.setItem('userAccount', JSON.stringify(userAccount)) //user persisted data
    const userData = JSON.parse(localStorage.getItem('userAccount'))
    setUserInfo(userData)
    setIsConnected(true)
  }

  return (
    <div className="app">
      <div className="app-wrapper">
        {!isConnected && (
          <div>
            <button className="card-button-meta" onClick={onConnect}>
              Web3 Type Login
            </button>
          </div>
        )}
      </div>
      {isConnected && (
        <div className="app-wrapper">
          <div className="app-details">
            <h2>✅ You are connected to metamask.</h2>
            <div className="app-account">
              <span>Account number:</span>
              {userInfo.account}
            </div>
            <div className="app-balance">
              <span>Balance:</span>
              {userInfo.balance}
            </div>
            <div className="app-connectionid">
              <span>Connection ID:</span>
              {userInfo.connectionid}
            </div>
          </div>

          <div>
            <button className="card-button-meta" onClick={onDisconnect}>
              Disconnect
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MetaMaskAuth
