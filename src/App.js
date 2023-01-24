import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
// import Home from './Components/HomPage';
import Employees from './pages/Employees';
// import Products from './pages/Product';
import Reports from './pages/Reports';
import Processes from './pages/Processes';

const App = () => {
  return (
    <>
        <Router>
          <Navbar/>
          <Routes>
            <Route  path ='/' exact element={<Home/>}></Route>
            <Route  path ='/reports' element ={<Reports/>}></Route>   
            <Route  path ='/processes' element ={<Processes/>}></Route>  
            <Route  path ='/employees/*' element ={<Employees/>}></Route>          
          </Routes>            
        </Router>
        
    </>
  )
}

export default App;