import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

    const params = useParams()

    //url inventada para simular rutas parametrizadas
    const url = `https://nombreDelDominio.com/products/${params.id}`

  return (
    <h1>Detail</h1>
  )
}

export default Detail