import React from 'react'
import { Link } from 'react-router-dom'

const Card = (product) => {
  return (
    //link que dirige a la ruta que corresponda segun el id del producto, no funciona de momento
    <Link to={'/detail/' + product.id}>
        <div>Card</div>
    </Link>
  )
}

export default Card