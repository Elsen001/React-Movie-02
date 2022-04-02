import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Movie = ({ film }) => {
    
    return (
        <div className='cart'>
            <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt="" />
            <h3>{film.original_title}</h3>
            <Link className='link-details' to={`/details/${film.id}`} >Details</Link>
        </div>
    )
}

export default Movie