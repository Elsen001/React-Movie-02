import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItemContent = ({data}) => {
    return (
        <div className="cart2">
                <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
                <h3>{data.original_title}</h3>
                <Link className='link-details' to={`/details/${data.id}`} >Details</Link>
        </div>
    )
}

export default CategoryItemContent