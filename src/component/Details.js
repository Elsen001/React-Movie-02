import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetails } from '../redux/movieAction'

const Details = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const details = useSelector((state) => state.details)
 
  useEffect(() => {
      dispatch(getDetails(id))
  }, [])

  return (
    <>
      <div className='details'>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt="" />
          <h3>{details.original_title}</h3>
        </div>
        <div className='details-content'>
          <p>{details.overview}</p>
          <h3>Popularity:{details.popularity}</h3>
          <h3>Release_date:{details.release_date}</h3>
          <h3>IMDB:{details.vote_average}</h3>
          {
           details.genres &&  details.genres.map((re)=>(
              <span>{re.name}</span>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default Details