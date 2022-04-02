import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getMovie } from '../redux/movieAction'
import Movie from './Movie'

const Movies = () => {
    const dispatch = useDispatch()
    const films = useSelector((state) => state.films)
    useEffect(() => {
        dispatch(getMovie())
    }, [])

    return (
        <>
            <div className='carts'>

                {
                    films && films.map((film, key) => (
                        <Movie key={film.id} film={film} />
                    ))
                }

            </div>
        </>
    )
}

export default Movies