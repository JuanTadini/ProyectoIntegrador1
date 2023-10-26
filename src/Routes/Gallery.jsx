import React, { useEffect } from 'react'
import { useProductStates } from '../Components/Context/Context'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Gallery = () => {

    const {state, dispatch} = useProductStates()

    const params = useParams()

    const url = `https://fakestoreapi.com/products/${params.id}`

    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_PRODUCT', payload: res.data}))
    }, [])

  return (
    <div>Gallery</div>
  )
}

export default Gallery