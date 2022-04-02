import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMovie, searchMovie } from '../redux/movieAction'

const Search = () => {
    const [keyword, setKeyword] = useState("")
    const dispatch = useDispatch()
    const films = useSelector((state) => state.films)
    const navigate = useNavigate()

    const onChange = (e) => {
        setKeyword(e.target.value);
    }
    const onClick = (e) => {
        e.preventDefault()
        navigate("/")
        if (keyword.length > 0) {
            dispatch(searchMovie(keyword))
            setKeyword("")
        } else {
            dispatch(getMovie())
        }
    }


    return (
        <div className='search'>
            <form onSubmit={onClick} action="">
                <input onChange={onChange} value={keyword} type="text" placeholder='Place enter...' />
                <button onClick={onClick} type='button'>Search</button>
            </form>
        </div>
    )
}

export default Search