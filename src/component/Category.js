import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCategory } from '../redux/movieAction'
import CategoryItem from './CategoryItem'

const Category = () => {
    const dispatch = useDispatch()
    const category=useSelector((state)=>state.category)
    useEffect(()=>{
       dispatch(getCategory())
    },[])
    return (
        <div className="category">
            <h1>Category</h1>
            {
                category && category.map((res) => (
                    <CategoryItem res={res} />
                ))
            }
        </div>
    )
}

export default Category