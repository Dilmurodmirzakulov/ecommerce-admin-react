import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams()
  let navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <div> Product {id} </div>
    </>
  )
}

export default Product