import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useContext, useEffect, useRef, useState } from 'react'
import { searchdatafromlist } from '../reddux/homeSlice'
import { filterddata } from '../reddux/userSlice'
import {Route} from 'react-router-dom'
import { authcontext } from '../contextApi/context'


const Navbar = () => {

    const inputRef = useRef(" ")
    const dispatch = useDispatch()
    const {setIslogin,userdata}=useContext(authcontext)
    const { addtocartitem } = useSelector((state) => state.leftedata)


    const handlelogout = () => {
        setIslogin(false)
    }

    const setchangeVlaue = () => {
        dispatch(searchdatafromlist(inputRef.current.value))

    }
    const changeuserdata = () => {
        dispatch(filterddata(inputRef.current.value))

    }

    useEffect(()=>{
        if( <Route path='/'/>){
            setchangeVlaue()
        }else{
            changeuserdata() 
        }
    },[])

    return (
        <>

            <nav className="navbar navbar-expand-lg  navbar-light fixed-top" style={ { backgroundColor: "#e3f2fd" } }>
                <div className="container">
                    <NavLink to='/' className="navbar-brand" >Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/products' className="nav-link" aria-current="page" >Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/users' className="nav-link" aria-current="page" href="#">Users</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact' className="nav-link" aria-current="page" >Contact Us</NavLink>
                            </li>


                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ref={ inputRef } onChange={()=>{
                                setchangeVlaue()
                                changeuserdata()
                            }} />
                          
                        </form>
                        <div className="btnimglock m-2" onClick={ handlelogout }> <img src="https://w7.pngwing.com/pngs/416/62/png-transparent-anonymous-person-login-google-account-computer-icons-user-activity-miscellaneous-computer-monochrome.png" alt="" /> 
                        <div></div>
                        </div>

                        <div type="button" className="cartbtn">
                            <NavLink to='/addtocart' ><img src="https://thenounproject.com/api/private/icons/5244049/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" alt="" /> </NavLink>

                            <div className='cartitemNumber'>
                                <div>{ addtocartitem.length > 0 ? <h5>{ addtocartitem.length }</h5> : " " }</div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
