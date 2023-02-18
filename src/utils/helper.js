export const formatValidThru = (validThru) => {
  if (validThru.length > 4) return
  const month = validThru.slice(0, 2)
  const year = validThru.slice(2, 4)

  return [month, year].join('/')
}

export const separateCardNumber = (cardNumber) => {
  if (!cardNumber) return
  if (cardNumber.length > 16) return
  const first = cardNumber.slice(0, 4)
  const second = cardNumber.slice(4, 8)
  const third = cardNumber.slice(8, 12)
  const fourth = cardNumber.slice(12, 16)

  return [first, second, third, fourth].join(' ')
}

export const defaultCardNumber = () => {
  return Array(4).fill('XXXX')
}

export const saveCardsOnLOcalStorage = (card) => {
  const currentCardList = getDataFromLocalStorage('cards') || []
  const allCards = [card, ...currentCardList]
  if (currentCardList.length > 2) {
    allCards.pop()
  }
  saveDataOnLocalStorage('cards', allCards)
}
export const getDataFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

export const saveDataOnLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const removeDataFromLocalStorage = (key) => {
  localStorage.removeItem(key)
}
