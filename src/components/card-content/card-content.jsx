import React from 'react'

import Dropdown from 'react-bootstrap/Dropdown'

import './card-content.styles.css'

export const removeNullContent = () => {
  const contentDiv = document.querySelector('.null-content')
  if (contentDiv) {
    contentDiv.parentNode.removeChild(contentDiv)
  }
}

const CardContent = () => {
  return (
    <div className="card-content">
      <div className="null-content">
        {' '}
        &#9827; Null content for UI/UX{' '}
        <span style={{ fontWeight: 'bold' }}> https://randomsitename.io</span>
        <span onClick={removeNullContent} className="delete-icon">
          &#10007;
        </span>
      </div>
      <ul className="card-list-ul">
        <li className="card-list-li">
          {' '}
          <a href="#" className="card-link">
            {' '}
            NFT Sales{' '}
          </a>
        </li>
        <li className="card-list-li">
          {' '}
          <a href="#" className="card-link">
            {' '}
            Explorer{' '}
          </a>
        </li>
        <li className="card-list-li">
          {' '}
          <a href="#" className="card-link">
            {' '}
            NFT Stake{' '}
          </a>
        </li>
        <li className="card-list-li">
          {' '}
          <a href="#" className="card-link">
            {' '}
            Profile{' '}
          </a>
        </li>
        <li className="card-list-li">
          {' '}
          <a href="#" className="card-link">
            {' '}
            Activities{' '}
          </a>
        </li>
        <li className="card-list-li">
          {' '}
          <a href="#" className="card-link">
            {' '}
            Create NFT{' '}
          </a>
        </li>
      </ul>
      <div className="card-categorys">
        <div className="card-category-div"> All </div>
        <div className="card-category-div"> Art </div>
        <div className="card-category-div"> Games </div>
        <div className="card-category-div"> Photography </div>
        <div className="card-category-div"> Memes </div>
        <div className="card-category-div"> NSFW </div>
      </div>
      <div className="card-dropdowns">
        <div className="card-dropdowns-left">
          <Dropdown className="card-category-dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              All Collections
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="card-category-dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              All Currencies
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="card-dropdowns-right">
          <Dropdown className="card-category-dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Newest
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="card-category-dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              20
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default CardContent
