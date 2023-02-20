import React, { useState } from 'react'
import './addCard.css'
import Top from '../../components/Top/Top'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import CardForm from '../../components/CardForm/CardForm'
import { formatValidThru, saveCardsOnLOcalStorage } from '../../utils/helper'
import { useNavigate } from 'react-router-dom'
export default function AddCardPage() {
  const navigate = useNavigate()

  const [card, setCard] = useState({
    number: '',
    name: '',
    validThru: '',
    ccv: '',
    vendorIndex: 0,
  })

  const handleChangeCardInfo = (e) => {
    const key = e.target.name
    let value = e.target.value
    switch (key) {
      case 'validThru':
        if (value.length > 4) return
        if (value.length === 4) {
          value = formatValidThru(value)
        }
        break

      case 'number':
        if (value.length > 16) return
        break
      case 'vendorIndex':
        value = Number(value)
        break
    }

    setCard({
      ...card,
      [key]: value,
    })
  }

  const handleAddNewCard = () => {
    const isValid = validation()
    if (!isValid) return
    saveCardsOnLOcalStorage(card)
    navigate('/', { state: { card } })
  }

  const validation = () => {
    let result = true
    if (card.number.length < 16) {
      result = false
    }
    if (!card.name) {
      result = false
    }
    if (card.validThru.length < 4) {
      result = false
    }
    if (card.ccv.length < 3) {
      result = false
    }
    if (card.vendorIndex === 0) {
      result = false
    }
    
    return result
  }
  return (
    <section className='add-card'>
      <Top rubric='Add a new banK card' subRubric='NEW card' />
      <Card card={card} />
      <CardForm card={card} handleChangeCardInfo={handleChangeCardInfo} />
      <Button className='btn--add-card-page' onClick={handleAddNewCard}>
        Add card
      </Button>
    </section>
  )
}
