import React from 'react'

import './card-paginant.styles.css'
import '../card-list/card-list.styles.css'

const DisplayEmployees = ({
  pageNum,
  pageSize,
  cards,
  UserPhoto,
  AvaxCoinImg,
}) => {
  console.log(cards)
  const start = pageNum * pageSize
  const end = start + pageSize
  const currentCards = cards.slice(start, end)

  return (
    <div className="card-grid">
      {currentCards.map(({ id, title0, title1, title2, title3 }, index) => (
        <div className="card-container" key={index} id={id}>
          <div className="card-list">
            <h1
              className="header"
              style={{ fontSize: '25px', color: 'gray' }}
            >{`Card ${id} `}</h1>
            <img
              className="card-image"
              src={`https://duskbreakers.gg/breaker_images/${id}.png`}
              alt={`Card ${id} asset`}
            />
            <div className="card-text">
              <div className="card-text-creator-div">
                <p className="card-text-creator">Creator: </p>
                <img
                  src={UserPhoto}
                  style={{ width: '40px', height: '30px' }}
                  alt="user-asset"
                  className="user-asset"
                />
                <p className="card-text-creator"> {title0}</p>
              </div>

              <p className="card-text-collection">{title1}</p>

              <p className="card-text-coin">
                {title2}{' '}
                <img
                  src={AvaxCoinImg}
                  style={{ width: '20px', height: '20px' }}
                  alt="avax-coin"
                />
              </p>
              <p className="card-text-usd">{title3} </p>
            </div>
            <div className="card-button-div">
              <button className="card-buy-button">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayEmployees
