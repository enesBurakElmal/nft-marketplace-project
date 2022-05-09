import { ethers } from 'ethers'
import React, { useEffect, useState } from 'react'

import NavbarLogo from '../../assets/navbar-logo.png'

import Tilt from 'react-tilt'

import './navbar-styles.css'

import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'

import myEpicNft from '../login-auth/myepicnft.json'
import { removeNullContent } from '../card-content/card-content'

const TOTAL_MINT_COUNT = 50

// I moved the contract address to the top for easy access.
const CONTRACT_ADDRESS = '0x76768E14f9D04251915724bd06c0628654D08dcc'

// source__ https://www.freecodecamp.org/news/add-a-metamask-login-to-your-laravel-app/
// source2__ https://betterprogramming.pub/build-a-react-component-for-metamask-auth-10b7ecba5c3f
// php dosya sorulacak

const NavbarComponent = () => {
  const [currentAccount, setCurrentAccount] = useState('')

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window

    if (!ethereum) {
      console.log('Make sure you have metamask!')
      return
    } else {
      console.log('We have the ethereum object', ethereum)
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' })

    if (accounts.length !== 0) {
      const account = accounts[0]
      console.log('Found an authorized account:', account)
      setCurrentAccount(account)

      // Setup listener! This is for the case where a user comes to our site
      // and ALREADY had their wallet connected + authorized.
      setupEventListener()
    } else {
      console.log('No authorized account found')
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window

      if (!ethereum) {
        alert('Get MetaMask!')
        return
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      let chainId = await ethereum.request({ method: 'eth_chainId' })
      console.log('Connected to chain ' + chainId)

      // String, hex code of the chainId of the Rinkebey test network
      const rinkebyChainId = '0x4'
      if (chainId !== rinkebyChainId) {
        alert('You are not connected to the Rinkeby Test Network!')
      }
      console.log('Connected', accounts[0])
      setCurrentAccount(accounts[0])

      // Setup listener! This is for the case where a user comes to our site
      // and connected their wallet for the first time.
      setupEventListener()
    } catch (error) {
      console.log(error)
    }
  }

  // Setup our listener.
  const setupEventListener = async () => {
    // Most of this looks the same as our function askContractToMintNft
    try {
      const { ethereum } = window

      if (ethereum) {
        // Same stuff again
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          myEpicNft.abi,
          signer
        )

        // THIS IS THE MAGIC SAUCE.
        // This will essentially "capture" our event when our contract throws it.
        // If you're familiar with webhooks, it's very similar to that!
        connectedContract.on('NewEpicNFTMinted', (from, tokenId) => {
          console.log(from, tokenId.toNumber())
          alert(
            `Hey there! We've minted your NFT and sent it to your wallet. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`
          )
        })

        console.log('Setup event listener!')
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const walletInfo = async () => {
    const { ethereum } = window

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const connectedContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        myEpicNft.abi,
        signer
      )
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      const account = accounts[0]
      const balance = await connectedContract.transferFrom(account, account, 1)
      console.log(balance)
    } else {
      console.log("Ethereum object doesn't exist!")
    }
  }

  const askContractToMintNft = async () => {
    try {
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          myEpicNft.abi,
          signer
        )

        console.log('Going to pop wallet now to pay gas...')
        let nftTxn = await connectedContract.makeAnEpicNFT()

        console.log('Mining...please wait.')
        await nftTxn.wait()
        console.log(nftTxn)
        if (nftTxn.wait) {
          return (
            <div>
              <p>Minting NFT...</p>
              <p>Please wait...</p>
              <p>
                Mined, see transaction: https://rinkeby.etherscan.io/tx/
                {nftTxn.hash}
              </p>
            </div>
          )
        }
        console.log(
          `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        )
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  const renderNotConnectedContainer = () => (
    <button
      onClick={connectWallet}
      className="cta-button connect-wallet-button"
    >
      Connect to a Wallet
    </button>
  )

  const renderMintUI = () => (
    <button onClick={walletInfo} className="cta-button connect-wallet-button">
      Donate
    </button>
  )

  return (
    <div className="navbar-container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="navbar-brand" href="#">
          <Tilt className="Tilt" options={{ max: 55 }}>
            <img
              src={NavbarLogo}
              alt="logo"
              style={{ width: '60px', height: '45px' }}
              className="navbar-logo"
            />
          </Tilt>
        </Navbar.Brand>
        <Container className="container-navbar ">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggle "
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Button className="wallet-connect-button">
                {currentAccount === ''
                  ? renderNotConnectedContainer()
                  : renderMintUI()}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
