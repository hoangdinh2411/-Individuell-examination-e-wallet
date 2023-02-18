import React from 'react'
import Card from '../Card/Card'
import './cardStack.css'
export default function CardStack(props) {
  return (
    <section className='card-stack'>
      {props.cards.length !== 0 ? (
        props.cards.map((card, cardIndex) => (
          <div
            onClick={() => props.handleChangeCard(cardIndex)}
            className={`card-stack__items card-stack__items--card-${
              cardIndex + 1
            }`}
            key={cardIndex}
          >
            <Card card={card} />
          </div>
        ))
      ) : (
        <p className='message'>Not cards</p>
      )}
    </section>
  )
}
