import React from 'react'
import './top.css'
export default function Top(props) {
  return (
    <section className='top'>
      <h1 className='top__rubric'>{props.rubric}</h1>
      <p className='top__sub-rubric'>{props.subRubric}</p>
    </section>
  )
}
