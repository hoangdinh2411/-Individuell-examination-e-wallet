import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import './home.css'
import Top from '../../components/Top/Top'
import CardStack from '../../components/CardStack/CardStack'
import Button from '../../components/Button/Button'
import { useLocation, Link } from 'react-router-dom'
import {
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
  saveDataOnLocalStorage,
} from '../../utils/helper'

export default function HomePage() {
  const [cards, setCards] = useState([])
  const [pickedCardIndex, setPickedCardIndex] = useState(0)
  const location = useLocation()

  useEffect(() => {
    if (!location.state?.card) return
    let cardsOnLocalStorage = getDataFromLocalStorage('cards') || []
    let pickedCardIndexOnLocalStorage = getDataFromLocalStorage('picked-card')

    const isRepeat = checkRepeatCard(cards, location.state.card)
    if (isRepeat) return
    setCards(cardsOnLocalStorage)
    if (pickedCardIndexOnLocalStorage) {
      setPickedCardIndex(pickedCardIndexOnLocalStorage)
    }
  }, [])
  console.log(cards)
  const checkRepeatCard = (cards, newCard) => {
    return cards.some((card) => card.number === newCard.number)
  }
  const handleChangeCard = (cardIndex) => {
    setPickedCardIndex(cardIndex)
    saveDataOnLocalStorage('picked-card', cardIndex)
  }

  const removeCard = () => {
    const newCards = cards?.filter((_, index) => index !== pickedCardIndex)
    removeDataFromLocalStorage('picked-card')
    saveDataOnLocalStorage('cards', newCards)
    setCards(newCards)
    setPickedCardIndex(0)
  }

  return (
    <section className='home'>
      <Top rubric='E-WalLet' subRubric='active card' />
      {cards.length !== 0 && (
        <div>
          <span onClick={removeCard} className='remove-card'>
            Remove card
          </span>
          <Card card={cards.length !== 0 ? cards[pickedCardIndex] : {}} />
        </div>
      )}
      <CardStack cards={cards} handleChangeCard={handleChangeCard} />
      <Button className='btn--home-page'>
        <Link to='/add-card'>Add a new card</Link>
      </Button>
    </section>
  )
}
