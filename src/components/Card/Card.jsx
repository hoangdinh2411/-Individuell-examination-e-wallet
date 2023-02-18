import React from 'react'
import chipLight from '../../assets/images/chip-light.svg'
import chipDark from '../../assets/images/chip-dark.svg'
import defaultVendor from '../../assets/images/vendor-bitcoin.svg'
import './card.css'
import { vendors } from '../../assets/data/vendors'
import { defaultCardNumber, separateCardNumber } from '../../utils/helper'
export default function Card(props) {
  const { card } = props
  const vendor = vendors[card.vendorIndex]
  const number = separateCardNumber(card.number)

  const displayDefaultCardNumber = () => {
    return defaultCardNumber().map((n, index) => <span key={index}>{n}</span>)
  }
  return (
    <div
      className='card'
      style={{
        background: vendor?.background,
        color: vendor?.color,
      }}
    >
      <div className='card__icons'>
        <img
          className='card__chip'
          src={card?.vendorIndex === 0 ? chipDark : chipLight}
          alt='chip'
        />
        <img
          src={vendor?.image || defaultVendor}
          alt={vendor?.name || 'vendor'}
          className='card__vendor'
        ></img>
      </div>
      <div className='card__numbers'>
        {number || displayDefaultCardNumber()}
      </div>

      <div className='card__info'>
        <aside className='card__info--left'>
          <p className='title'>Cardholder name</p>
          <p className='content'>{card?.name || 'firstname lastname'}</p>
        </aside>
        <aside className='card__info--right'>
          <p className='title'>Valid Thru</p>
          <p className='content'>{card?.validThru || 'mm/yy'}</p>
        </aside>
      </div>
    </div>
  )
}
