import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategoryItem } from '../redux/movieAction';
import CategoryItemContent from './CategoryItemContent';

const CategoryArray = () => {
    const dispatch = useDispatch()
    const categoryItems = useSelector((state) => state.categoryItems);
    const {id}=useParams()

    useEffect(()=>{
        dispatch(getCategoryItem(id))
    },[])

    return (
        <div className='carts2'>
            {
                categoryItems.map((data)=>(
                   <CategoryItemContent data={data} />
                ))
            }    
        </div>
    )
}

export default CategoryArray