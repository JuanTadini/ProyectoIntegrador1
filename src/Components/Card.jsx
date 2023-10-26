import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'

const Card = ({product}) => {
  return (
    <div className={styles['card']}>
      <img style={{height: 100, width: 100}} src={product.images} alt="" />
      <Link to={'/detail/' + product.id}>
      <h2>Name: {product.title}</h2>
      </Link>
      
      {/* <h3>id: {product.id}</h3>
      <h3>Description: {product.description}</h3>
      <h3>Cost/day: {product.price}</h3> */}

    </div>
  )
}

export default Card