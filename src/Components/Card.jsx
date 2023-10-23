import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({product}) => {
  return (
    <div>
      <Link to={'/detail/' + product.id}>
      <h2>Name: {product.name}</h2>
      </Link>
      <img style={{height: 100, width: 100}} src={product.images[0]} alt="" />
      <h3>id: {product.id}</h3>
      <h3>Description: {product.description}</h3>
      <h3>Cost/day: {product.price}</h3>
    </div>
  )
}

export default Card