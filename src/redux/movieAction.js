import axios from "axios"

export  const getMovie =()=> async (dispatch)=>{
       await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eb8628b4f17cb2868849e117a446d83a&language=en-US&page=1`)
        .then(res =>{
            dispatch({type:"GET-MOVIE",payload:res.data.results})
        })
}


export const getCategory =()=>(dispatch)=>{
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=eb8628b4f17cb2868849e117a446d83a&language=en-US`)
    .then(res=>{
        dispatch({type:"GET-CATEGORY",payload:res.data.genres})
    })
}

export const getDetails = (id) => (dispatch)=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=eb8628b4f17cb2868849e117a446d83a&language=en-US`)
    .then(res =>{
        dispatch({type:"GET-DETAILS",payload:res.data})
    })
}

export const getCategoryItem =(id)=> async (dispatch)=>{
   await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=eb8628b4f17cb2868849e117a446d83a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`)
     .then(res =>{
        dispatch({type:"GET-ITEM",payload:res.data.results})
    })
}


export const searchMovie =(keyword)=>(dispatch)=>{
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=eb8628b4f17cb2868849e117a446d83a&language=en-US&query=${keyword}&page=1&include_adult=false`)
    .then(res=>{
        dispatch({type:"SEARCH",payload:res.data.results})
        console.log(res)
    })
}