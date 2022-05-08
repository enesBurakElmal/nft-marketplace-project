import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import React from 'react'
import { Buffer } from 'buffer'

import Tilt from 'react-tilt'
import MetaMaskAuth from '../login-auth/web3-type-login.jsx'
import as_ from '../login-auth/firebase-type-login'

import metaMaskAuth2 from '../login-auth/ethers-type-login'

import MetamaskLogo from '../../assets/metamask.svg'
// import ERC20TransferABI from '../login-component/erc20-data.js'
import { ethers } from 'ethers'

import { daiToken } from '../login-auth/erc20-data.js'

import SECTIONS_DATA from '../card-list/card-list'
import UserPhoto from '../../assets/card-profile.png'
import AvaxCoinImg from '../../assets/ava-token.png'
import { addCard, removeCard } from '../card-list/scripts'

// import MetaMaskAuth from '../login-component/login'

import './card-paginant.styles.css'
import '../card-list/card-list.styles.css'

const Web3 = require('web3')
const ethEnabled = async () => {
  if (window.ethereum) {
    await window.ethereum.request({ method: 'eth_requestAccounts' })
    window.web3 = new Web3(window.ethereum)
    return true
  }
  return false
}

// hr@gamesunited.co
// source: https://ordinarycoders.com/blog/article/react-pagination
// read! : https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/

const Card = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [employees] = useState(SECTIONS_DATA)
  const [page, setPage] = useState(0)

  const handlePageClick = (data) => {
    const selectedPage = data.selected
    const offset = selectedPage * employeesPerPage
    setCurrentPage(selectedPage)
    setPage(offset)
  }

  const changePage = ({ selected }) => {
    setPage(selected)
    setCurrentPage(selected)
  }

  const handleAddCard = () => {
    addCard()
    setCurrentPage(currentPage + 1)
  }

  const handleRemoveCard = () => {
    removeCard()
    setCurrentPage(currentPage - 1)
    // if (employees.length === 12) {
    //   setPage(0)
    // }
  }

  const totalPages = Math.ceil(employees.length / 12)
  const employeesPerPage = 12

  const numberOfEmployeesVistited = page * employeesPerPage

  const displayEmployees = employees
    .slice(
      numberOfEmployeesVistited,
      numberOfEmployeesVistited + employeesPerPage
    )
    .map((employee) => {
      return (
        <div className="card-container" key={employee.id}>
          <div className="card-list">
            <h1 className="header">{`Card ${employee.id} `}</h1>
            <img
              className="card-image"
              src={`https://duskbreakers.gg/breaker_images/${employee.id}.png`}
              alt={`Card ${employee.id} asset`}
              style={{ width: '218px', height: '240px' }}
            />
            <div className="card-text">
              <p className="card-text-creator">
                Creator:{' '}
                <span>
                  <img
                    src={UserPhoto}
                    style={{ width: '40px', height: '30px' }}
                    alt="user-asset"
                    className="user-asset"
                  />
                </span>{' '}
                {employee.title0}
              </p>
              <p className="card-text-collection">{employee.title1}</p>

              <p className="card-text-coin">
                {employee.title2}{' '}
                <img
                  src={AvaxCoinImg}
                  style={{ width: '20px', height: '20px' }}
                  alt="avax-coin"
                />
              </p>
              <p className="card-text-usd">{employee.title3} </p>
            </div>
          </div>
          <div className="card-button-div">
            <button className="card-buy-button">Buy Now</button>
          </div>
        </div>
      )
    })

  return (
    <div>
      <div className="card-buttons">
        <button className="card-button" onClick={handleAddCard}>
          Add Card
        </button>

        <button className="card-button" onClick={handleRemoveCard}>
          Delete Card
        </button>

        <button className="card-button" onClick={ethEnabled}>
          Debugger
        </button>
      </div>
      <div className="card-grid">{displayEmployees} </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        handlePageClick={handlePageClick}
        pageRangeDisplayed={5}
        subContainerClassName={'pages pagination'}
        onPageChange={changePage}
        activeClassName={'navigationActive'}
        containerClassName={'navigationButtons'}
        previousLinkClassName={'previousButton'}
        nextLinkClassName={'nextButton'}
        disabledClassName={'navigationDisabled'}
        currentPage={currentPage}
      />
      <div className="card-buttons">
        <button className="card-button" onClick={handleAddCard}>
          Add Card
        </button>

        <button className="card-button" onClick={handleRemoveCard}>
          Delete Card
        </button>
        <div>
          <button className="card-button"> Debugger</button>
        </div>
      </div>
    </div>
  )
}

export default Card
