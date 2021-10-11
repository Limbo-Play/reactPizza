import React from 'react'

export default function PizzaPost({ image, name }) {
  return (
    <div>
      <img src={image} />
      <span>{name}</span>
    </div>
  )
}