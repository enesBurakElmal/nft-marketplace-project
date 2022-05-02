import SECTIONS_DATA from './card-list'

export const addCard = () => {
  const newCard = {
    id: SECTIONS_DATA.length - 1 + 1,
    title0: `Span 0`,
    title1: `Span 1`,
    title2: `Span 2`,
    title3: `Span 3`,
  }
  SECTIONS_DATA.push(newCard)
}

export const removeCard = () => {
  SECTIONS_DATA.pop()
}
