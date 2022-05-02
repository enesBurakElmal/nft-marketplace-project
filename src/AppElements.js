import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers'
import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(255, 255, 255);
  margin-top: 10rem;
  background-color: rgb(162, 194, 194);
  border-radius: 15px;
  padding: 1rem;
`

export const DivList = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
`
export const DivListLeft = styled.div`
  margin-right: 20px;
`

export const DivListRight = styled.div`
  margin-left: 20px;
`

export const DivListItem = styled.div`
  margin-top: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 10px solid;
  color: #3b3b3b;
  border-color: #3b3b3b;
  font-weight: bold;
  :hover {
    background-color: rgb(80, 94, 200);
    color: rgb(255, 255, 255);
    border-color: rgb(44, 42, 39);
  }
`

export const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
`

export const ButtonList = styled.div`
  margin-bottom: 10px;
`
export const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #3b3b3b;
  background-color: #3b3b3b;
  color: #ffffff;
  font-weight: bold;
  :hover {
    background-color: rgb(27, 27, 28) !important;
    color: rgb(255, 255, 255);
  }
`
