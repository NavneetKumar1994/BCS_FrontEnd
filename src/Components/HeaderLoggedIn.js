import React from 'react'

export default function HeaderLoggedIn({setLoggedIn}) {

     const handleSignOut= ()=>{
          setLoggedIn(false);
     }

  return (
     <>
     <div>
          <button onClick={handleSignOut} className="btn btn-success btn-danger"  >Sign Out</button>
     </div>
     </> 
      )
}
