import React, { useState,useContext } from 'react';
import { AppContext ,AppProvider} from '../Context';
import '../index.css';
import {NavLink, Route, Routes} from 'react-router-dom';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../Home/home';
import About from '../Home/About';
import SingleMovie from '../Home/SingleMovie';
import Error from '../Home/Error';



const Nav=()=> {

   const {search,setSearch,isError}=useContext(AppContext);
  
   const inputEvent=(event)=>{
 
         setSearch(event.target.value);
         console.log(search);
     }
    return (
    <>
       {/*navigation */ }
       <div className='main'>
         <div className='logo px-3'>
            <img src="images/logomovie.png" alt="logo" style={{color:"white"}} />
          </div>
            {/*navlink*/ }
          <div className='menu px-3 d-flex justify-content-around'>
            <div className=' menu-item px-4 py-2 mx-3 '><NavLink   className="menu-text text-light" to="/home"  > Home</NavLink> </div>
            <div className=' menu-item px-4 py-2 mx-3 '><NavLink    className="menu-text text-light" to="/about" > About</NavLink> </div>
          </div>
            
            {/*search box*/ } 
          <div className='d-flex justify-content-between align-items-center px-5'>
            <input type="text" placeholder='Search' className='bg-dark px-3 py-2 rounded fs-16' value={search} onChange={inputEvent} />
            <span style={{color: "#ffffff6b",fontSize:"0.9rem",padding: "0rem 0.5rem 0rem 0.5rem"}}>{isError.show && isError.msg}</span>
           </div>
        </div>

         {/*routing pages*/ }
        <Routes>
            <Route exact path='/home'  element={<Home/>}/>
            <Route exact path='/movies/:id' element={<SingleMovie/>}/>
            <Route exact path='/about'  element={<About/>}/>
            <Route exact path="*" element={<Error/>}/>
        </Routes>

      </>
    );
}

export default Nav;

