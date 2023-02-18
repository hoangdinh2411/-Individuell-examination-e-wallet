import React from 'react'
import { vendors } from '../../assets/data/vendors'
import './cardForm.css'
export default function CardForm(props) {
  const { card, handleChangeCardInfo } = props
  return (
    <form autoComplete='on' className='add-card-form'>
      <fieldset className='fields'>
        <label htmlFor='card-number' className='fields__label'>
          Card Number
        </label>
        <input
          placeholder='Numbers on card'
          value={card.number}
          name='number'
          className='fields__input'
          type='tel'
          id='card-number'
          onChange={handleChangeCardInfo}
        />
      </fieldset>
      <fieldset className='fields'>
        <label htmlFor='name' className='fields__label'>
          cardholder name
        </label>
        <input
          maxLength={16}
          placeholder='Your name on card'
          value={card.name}
          name='name'
          className='fields__input'
          type='text'
          id='name'
          onChange={handleChangeCardInfo}
        />
      </fieldset>
      <div className='separation '>
        <aside>
          <fieldset className='fields'>
            <label htmlFor='valid-thru' className='fields__label'>
              Valid Thru
            </label>
            <input
              maxLength={4}
              placeholder='MM/YY'
              value={card.validThru}
              name='validThru'
              className='fields__input'
              type='tel'
              id='valid-thru'
              onChange={handleChangeCardInfo}
            />
          </fieldset>
        </aside>
        <aside>
          <fieldset className='fields'>
            <label htmlFor='ccv' className='fields__label'>
              CCV
            </label>
            <input
              maxLength={3}
              value={card.ccv}
              name='ccv'
              className='fields__input'
              type='tel'
              id='ccv'
              onChange={handleChangeCardInfo}
            />
          </fieldset>
        </aside>
      </div>
      <fieldset className='fields '>
        <label htmlFor='vendor' className='fields__label'>
          Vendor
        </label>
        <select
          onChange={handleChangeCardInfo}
          name='vendorIndex'
          value={card.vendorIndex}
          id='vendor'
          className='fields__select'
        >
          {vendors &&
            vendors.map((vendor) => (
              <option key={vendor.id} value={vendor.id}>
                {vendor.name}
              </option>
            ))}
        </select>
      </fieldset>
    </form>
  )
}
