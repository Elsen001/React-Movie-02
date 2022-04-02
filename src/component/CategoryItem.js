import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CategoryItem = ({res}) => {
  

  return (
    <div><Link className='category-link' to={`/category/${res.id}`}>{res.name}</Link></div>
  )
}

export default CategoryItem