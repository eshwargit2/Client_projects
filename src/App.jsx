import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Sign from './Components/Sign'

import Navbar from './Components/Navbar'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import DashHome from './Components/DashHome'
import Search from './Components/Search'
import Scan from './Components/Scan'
import Card from './Components/Card'
import Account from './Components/Account'
import View from './Components/View'
import Register from './Components/Register'
import PrivateRoute from './Components/PrivateRoute'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
     {/* <Home/>
     <Sign/> */}
     {/* <Dashboard/> */}
     {/* <Navbar/> */}
     
       {/* <Link to="/sign"> ss</Link> */}

       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/sign' element={<Sign/>} />
        <Route path='/dash' element={<Dashboard/>} />
        <Route path='/dashome' element={ <PrivateRoute><DashHome/></PrivateRoute> } />
        
        {/* <Route path='/dashome' element={} /> */}
        <Route path='/search' element={ <PrivateRoute><Search/></PrivateRoute>} />
        <Route path='/scan' element={ <PrivateRoute><Scan/></PrivateRoute>} />
        <Route path='/card' element={ <PrivateRoute><Card/></PrivateRoute>} />
        <Route path='/account' element={ <PrivateRoute><Account/></PrivateRoute>} />
        <Route path='/view' element={ <PrivateRoute><View/></PrivateRoute>} />
        <Route path='/register' element={<Register/>} />
        
       </Routes>
   

   </>
  )
}

export default App
