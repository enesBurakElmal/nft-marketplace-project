import ReactPaginate from 'react-paginate'
import React from 'react'

import SECTIONS_DATA from '../card-list/card-list'
import UserPhoto from '../../assets/card-profile.png'
import AvaxCoinImg from '../../assets/ava-token.png'

import './card-paginant.styles.css'
import '../card-list/card-list.styles.css'

// source: https://ordinarycoders.com/blog/article/react-pagination
// read! : https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: SECTIONS_DATA,
      pageNum: 0,
      currentPage: 0,
      pageSize: 12,
      currentCard: {},
    }
    this.handlePageClick = this.handlePageClick.bind(this)
    this.changePage = this.changePage.bind(this)
    this.displayEmployees = this.displayEmployees.bind(this)
  }
  componentDidMount() {
    const { cards } = this.state
    const pageCount = Math.ceil(cards.length / this.state.pageSize)
    this.setState({ pageCount })
    this.setState({ currentCard: cards[0] })
  }

  handlePageClick = (data) => {
    const selectedPage = data.selected
    const offset = selectedPage * this.state.pageSize
    const currentCard = this.state.cards[offset]
    this.setState({ currentCard: currentCard })
  }

  changePage = ({ selected }) => {
    this.setState({ currentPage: selected })
    this.setState({ currentCard: this.state.cards[selected] })
    this.setState({ pageNum: selected })
  }

  displayEmployees = () => {
    const { cards } = this.state
    const { pageNum, pageSize } = this.state
    const start = pageNum * pageSize
    const end = start + pageSize
    const currentCards = cards.slice(start, end)
    return currentCards.map((card, index) => {
      return (
        <div className="card-container" key={card.id}>
          <div className="card-list">
            <h1
              className="header"
              style={{ fontSize: '25px', color: 'gray' }}
            >{`Card ${card.id} `}</h1>
            <img
              className="card-image"
              src={`https://duskbreakers.gg/breaker_images/${card.id}.png`}
              alt={`Card ${card.id} asset`}
              // style={{ width: '218px', height: '240px' }}
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
                <p className="card-text-creator"> {card.title0}</p>
              </div>

              <p className="card-text-collection">{card.title1}</p>

              <p className="card-text-coin">
                {card.title2}{' '}
                <img
                  src={AvaxCoinImg}
                  style={{ width: '20px', height: '20px' }}
                  alt="avax-coin"
                />
              </p>
              <p className="card-text-usd">{card.title3} </p>
            </div>
            <div className="card-button-div">
              <button className="card-buy-button">Buy Now</button>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    const { currentCardIndex, pageCount } = this.state

    const { handlePageClick } = this
    const { displayEmployees } = this
    const { changePage } = this

    return (
      <div className="grid-container">
        <div className="card-grid"> {displayEmployees()}</div>

        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          handlePageClick={handlePageClick}
          changePage={changePage}
          pageRangeDisplayed={5}
          subContainerClassName={'pages pagination'}
          activeClassName={'navigationActive'}
          containerClassName={'navigationButtons'}
          previousLinkClassName={'previousButton'}
          nextLinkClassName={'nextButton'}
          disabledClassName={'navigationDisabled'}
          activeLinkClassName={'navigationActive'}
        />
      </div>
    )
  }
}
export default Card

// const Card = () => {
//   const [currentPage, setCurrentPage] = useState(0)
//   const [employees] = useState(SECTIONS_DATA)
//   const [page, setPage] = useState(0)

//   const handlePageClick = (data) => {
//     const selectedPage = data.selected
//     const offset = selectedPage * employeesPerPage
//     setCurrentPage(selectedPage)
//     setPage(offset)
//   }

//   const changePage = ({ selected }) => {
//     setPage(selected)
//     setCurrentPage(selected)
//   }

//   const handleAddCard = () => {
//     addCard()
//     setCurrentPage(currentPage + 1)
//   }

//   const handleRemoveCard = () => {
//     removeCard()
//     setCurrentPage(currentPage - 1)
//     // if (employees.length === 12) {
//     //   setPage(0)
//     // }
//   }

//   const totalPages = Math.ceil(employees.length / 12)
//   const employeesPerPage = 12

//   const numberOfEmployeesVistited = page * employeesPerPage

//   const displayEmployees = employees
//     .slice(
//       numberOfEmployeesVistited,
//       numberOfEmployeesVistited + employeesPerPage
//     )
//     .map((employee) => {
//       return (
//         <div className="card-container" key={employee.id}>
//           <div className="card-list">
//             <h1
//               className="header"
//               style={{ fontSize: '25px', color: 'gray' }}
//             >{`Card ${employee.id} `}</h1>
//             <img
//               className="card-image"
//               src={`https://duskbreakers.gg/breaker_images/${employee.id}.png`}
//               alt={`Card ${employee.id} asset`}
//               style={{ width: '218px', height: '240px' }}
//             />
//             <div className="card-text">
//               <div className="card-text-creator-div">
//                 <p className="card-text-creator">Creator: </p>
//                 <img
//                   src={UserPhoto}
//                   style={{ width: '40px', height: '30px' }}
//                   alt="user-asset"
//                   className="user-asset"
//                 />
//                 <p className="card-text-creator"> {employee.title0}</p>
//               </div>

//               <p className="card-text-collection">{employee.title1}</p>

//               <p className="card-text-coin">
//                 {employee.title2}{' '}
//                 <img
//                   src={AvaxCoinImg}
//                   style={{ width: '20px', height: '20px' }}
//                   alt="avax-coin"
//                 />
//               </p>
//               <p className="card-text-usd">{employee.title3} </p>
//             </div>
//             <div className="card-button-div">
//               <button className="card-buy-button">Buy Now</button>
//             </div>
//           </div>
//         </div>
//       )
//     })

//   return (
//     <div className="grid-container">
//       <div className="card-grid">{displayEmployees} </div>
//       <ReactPaginate
//         previousLabel={'Previous'}
//         nextLabel={'Next'}
//         breakLabel={'...'}
//         pageCount={totalPages}
//         marginPagesDisplayed={2}
//         handlePageClick={handlePageClick}
//         pageRangeDisplayed={5}
//         subContainerClassName={'pages pagination'}
//         onPageChange={changePage}
//         activeClassName={'navigationActive'}
//         containerClassName={'navigationButtons'}
//         previousLinkClassName={'previousButton'}
//         nextLinkClassName={'nextButton'}
//         disabledClassName={'navigationDisabled'}
//         currentPage={currentPage}
//       />
//       {/* <div className="card-buttons">
//         <button className="card-button" onClick={handleAddCard}>
//           Add Card
//         </button>

//         <button className="card-button" onClick={handleRemoveCard}>
//           Delete Card
//         </button>
//         <div>
//           <button className="card-button"> Debugger</button>
//         </div>
//       </div> */}
//     </div>
//   )
// }

// export default Card
