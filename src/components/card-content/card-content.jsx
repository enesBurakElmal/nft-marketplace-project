import React from 'react'

import Dropdown from 'react-bootstrap/Dropdown'

import './card-content.styles.css'

import {
  CardContentContainer,
  NullContent,
  NullContentText,
  NullContentDeleteSymbol,
  CardListUl,
  CardListLi,
  CardListLink,
  CardCategorys,
  CardCategorysDiv,
  CardDropdowns,
  CardDropdownLeft,
  CardDropdownRight,
} from './card-content.elements'

export const removeNullContent = () => {
  const DeleteNulLContent = document.querySelector('.fWcCFn')
  DeleteNulLContent.remove()
}

const CardContent = () => {
  return (
    <CardContentContainer>
      <NullContent className="fWcCFn">
        {' '}
        &#9827; Null content for UI/UX{' '}
        <NullContentText> https://randomsitename.io</NullContentText>
        <NullContentDeleteSymbol onClick={removeNullContent}>
          &#10007;
        </NullContentDeleteSymbol>
      </NullContent>
      <CardListUl>
        <CardListLi>
          {' '}
          <CardListLink> NFT Sales </CardListLink>
        </CardListLi>
        <CardListLi>
          {' '}
          <CardListLink> Explorer </CardListLink>
        </CardListLi>
        <CardListLi>
          {' '}
          <CardListLink> NFT Stake </CardListLink>
        </CardListLi>
        <CardListLi>
          {' '}
          <CardListLink> Profile </CardListLink>
        </CardListLi>
        <CardListLi>
          {' '}
          <CardListLink> Activities </CardListLink>
        </CardListLi>
        <CardListLi>
          {' '}
          <CardListLink> Create NFT </CardListLink>
        </CardListLi>
        <Dropdown className="card-category-dropdown">
          <Dropdown.Toggle id="dropdown-basic" className="mobile-dropdown">
            All Categorys Right
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">NFT Sales</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Explorer</Dropdown.Item>
            <Dropdown.Item href="#/action-3">NFT Stake</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Activities</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Create NFT</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </CardListUl>
      <CardCategorys>
        <CardCategorysDiv> All </CardCategorysDiv>
        <CardCategorysDiv> Art </CardCategorysDiv>
        <CardCategorysDiv> Games </CardCategorysDiv>
        <CardCategorysDiv> Photography </CardCategorysDiv>
        <CardCategorysDiv> Memes </CardCategorysDiv>
        <CardCategorysDiv> NSFW </CardCategorysDiv>
        <Dropdown className="card-category-dropdown">
          <Dropdown.Toggle id="dropdown-basic" className="mobile-dropdown">
            All Categorys Left
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">All</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Art</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Games</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Photography</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Memes</Dropdown.Item>
            <Dropdown.Item href="#/action-1">NSFW</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </CardCategorys>
      <CardDropdowns>
        <CardDropdownLeft>
          <Dropdown className="card-category-dropdown">
            <Dropdown.Toggle id="dropdown-basic">
              All Collections
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="card-category-dropdown">
            <Dropdown.Toggle id="dropdown-basic">
              All Currencies
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </CardDropdownLeft>
        <CardDropdownRight>
          <Dropdown className="card-category-dropdown">
            <Dropdown.Toggle id="dropdown-basic">Newest</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="card-category-dropdown">
            <Dropdown.Toggle id="dropdown-basic">20</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </CardDropdownRight>
      </CardDropdowns>
    </CardContentContainer>
  )
}

export default CardContent
