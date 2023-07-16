import React,{useState} from 'react'
import HeaderLoggedIn from './HeaderLoggedIn';
import HeaderLoggedOut from './HeaderLoggedOut';
import './Header.css'
import myImage from './bcsLogo.jpeg'

export default function Header() {

     const [loggedIn,setLoggedIn]=useState(false);

  return (
     <>
     <header className="header-bar bg-dark mb-3">
     <a href="/" className='ml-4'><img id='logo' src={myImage} alt="bcsLogo"/></a>

          <div className="container d-flex flex-column flex-md-row " >
               <h1 className="my-4 mr-md-auto font-weight-bolder">
                    <a href="/" className="text-danger">
                    BCS
                    </a>
               </h1>
               {loggedIn ? <HeaderLoggedIn setLoggedIn={setLoggedIn}/>  : <HeaderLoggedOut setLoggedIn={setLoggedIn}/> }
          </div>
     </header>
     </>
     
  )
}
