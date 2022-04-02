const initialState ={
    films:[],
    details:{},
    category:[],
    categoryItems:[],
}

export const movieReducer =(state=initialState,action)=>{
    switch(action.type){
        case "GET-MOVIE":
            return{...state, films:action.payload}

        case "GET-CATEGORY":
            return{...state,category:action.payload}
            
        case "GET-DETAILS":
            return {
                ...state,
                details:action.payload
            }   
        case "GET-ITEM":
            return{
                ...state,
                categoryItems:action.payload
            }    
        case "SEARCH":
            return{
                ...state,
                films:[],
                films:action.payload
            }    
           

        default: return state 
    }
}