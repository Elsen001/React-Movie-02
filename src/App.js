import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Category from './component/Category'
import Movies from './component/Movies'
import Details from './component/Details'
import Navbar from './component/Navbar'
import "./style/app.scss"
import CategoryArray from './component/CategoryArray'
import Search from './component/Search'

const App = () => {

  return (
    <Router>
    <Navbar/>
         <Routes>
           <Route exact path='/' element={<><Search/>,<Movies/>,<Category/></>} />
           <Route exact path='/details/:id' element={<Details/>} />
           <Route path='/category/:id' element={<CategoryArray/>} />
         </Routes>
    </Router>
  )
}

export default App
