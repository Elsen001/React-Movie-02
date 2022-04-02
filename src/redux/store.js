import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { movieReducer } from "./movieReducer";



const store = createStore(
    movieReducer,
    applyMiddleware(thunk)
)

export default store