import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Products from './components/products/Products';
import User from './components/user/User';
import Contact from './components/contactUs/Contact';
import LInksofProduct from './components/products/LInksofProduct';
import Showproductdetails from './components/products/Showproductdetails';
import Quickviewdetails from './components/home/Quickviewdetails';
import Cart from './components/cart/Cart';
import { authcontext } from './components/contextApi/context';
import { useContext } from 'react';
import SignUp from './components/loginpage/SignUp';
import Login from './components/loginpage/Login';


function App() {

  const { islogin,signtologin} = useContext(authcontext)

  return (
    <>

      {
        islogin ? <>
          <Navbar />

          <Routes>
            <Route path='/' element={ <Home /> }> </Route>
            <Route path='/quickviewdata' element={ <Quickviewdetails /> }></Route>
            <Route path='/products' element={ <Products /> }>

              <Route path='' element={ <Navigate to='electronics' /> }></Route>
              <Route path=':id' element={ <LInksofProduct /> }></Route>
            </Route>

            <Route path='/products/:idd/:i' element={ <Showproductdetails /> }></Route>

            <Route path='/users' element={ <User /> } />
            <Route path='/contact' element={ <Contact /> } />

            <Route path='/addtocart' element={ <Cart /> }></Route>
            <Route path='/*' element={ <Home /> } />
          </Routes>
        </> : <> {signtologin ? <SignUp /> : <Login/>}</> 
         
      }

    </>
  );
}

export default App;
