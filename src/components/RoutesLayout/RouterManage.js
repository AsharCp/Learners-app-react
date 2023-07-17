import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Signup from '../Login/Signup'
import Home from '../Home/Home'
import Signin from '../Login/Signin'
import Front from '../Frontpage/Front'
import Reset from '../ResetPassword/Reset'
import Ask from '../AskQuestion/Ask'
import Solve from '../SolveQuestion/Solve'

function RouterManage() {
  return (
    <div>
        <Router>
            <Header/>
            
            <Routes>
                <Route path='/' element={<Front/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/reset' element={<Reset/>}/>
                <Route path='/ask-page' element={<Ask/>}/>
                <Route path='/solve-page' element={<Solve/>}/>
                
            </Routes>
            <Footer/>
        </Router>
      
    </div>
  )
}

export default RouterManage
