import styled from 'styled-components'

export const CardContentContainer = styled.div`
  width: 100%;
  max-width: 1050px !important;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: auto;
  margin-top: 50px;
`

export const NullContent = styled.div`
  background-color: #3d5a80;
  color: white;
  font-size: 11px;
  margin-top: 20px;
  padding: 5px;
  flex-wrap: wrap;
`
export const NullContentText = styled.span`
  font-weight: bold;
`

export const NullContentDeleteSymbol = styled.span`
  color: #f5f5f5;
  float: right;
  cursor: pointer;
`

export const CardListUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  /* align-items: end; */
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 0;
`
export const CardListLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-end;
  padding: 5px;
  margin: 5px;
  color: #000000;
  font-size: 16px;
  font-family: 'Inter Var', sans-serif;
  font-weight: bold;
  @media (max-width: 626px) {
    display: none;
  }
`
export const CardListLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  :hover {
    color: #000000;
  }
`

export const CardCategorys = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 0 5px 0;
`
export const CardCategorysDiv = styled.div`
  padding: 5px 10px;
  color: white;
  background-color: #98c1d9;
  font-size: 14.5px;
  font-family: 'Inter Var', sans-serif;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: #3d5a80;
  }
  @media (max-width: 626px) {
    display: none;
  }
`

export const CardDropdowns = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const CardDropdownLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-right: auto;
`

export const CardDropdownRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: flex-end;
  gap: 15px;
`
