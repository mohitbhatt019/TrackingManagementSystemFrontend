import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { resetLogoutState } from '../features/LoginSlice'

const Navbar = () => {
    const loginStatus=useSelector((state)=>state.app.token)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const logoutClick=()=>{
        localStorage.setItem("currentUser","");
        dispatch(resetLogoutState());
        navigate("/login")
      }


  return (
    <div> <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <p class="nav-link" href="#">Home</p>
        </li>
  
        <li class="nav-item active">
          <Link to="/company" class="nav-link" href="#">Company List</Link>
        </li> 
  
  
        <li class="nav-item">
        </li>
      </ul>
      <form class="row ">
        <div className='col-10'>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        </div>
        <div className='col-2'>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>
      </form>
      <div className='offset-8'>
        {loginStatus?(
          <button className='btn btn-outline-secondary m-1 p-1' onClick={logoutClick}>Logout</button>
        ):(
          <Link to="/login" className='btn btn-outline-secondary m-1 p-1'>Login</Link>
        )}
      </div>
          {/* <a to="/register" className='btn btn-outline-secondary m-1 p-1'>Register</a> */}
  
      
    </div>
  </nav></div>
  )
}

export default Navbar