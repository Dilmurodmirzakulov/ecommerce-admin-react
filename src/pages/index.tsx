import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>Home <br /> <Link to={"/product/123"}>go product page</Link> <br /> <Link to={"/product/456"}>go product 2 page</Link> </div>
  )
}

export default Home