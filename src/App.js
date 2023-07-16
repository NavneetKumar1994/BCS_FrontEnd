
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Terms from './Components/Terms'
import Footer from './Components/Footer'


export default function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/terms' element={<Terms/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}
