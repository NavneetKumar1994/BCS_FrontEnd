import React,{useState} from 'react'
import Axios from 'axios'

export default function HeaderLoggedOut({setLoggedIn}) {

     const [email,setEmail]= useState("")
     const [password,setPassword]= useState("")
 
     
    async function handleSubmit(e){
       e.preventDefault()
 
       try{
         
         const response=  await Axios.post("http://localhost:8080/bcs/auth/signin",{email,password}) 
          
 
         if(response.data){
          // alert("Successfully logged in"+response.data)
           setLoggedIn(true);
         }
 
       }catch(error){
            //the request was made but the respose is rejected
            if(error.request){
                alert("Error: No response received from the server")
            }
            //the request made but the service code returned an error code other than 2xx
           else if(error.response){
                alert("Error: "+ error.response.data.message)
           }else{
                alert("Error during Log in"+error)
           } 
       }
     }



  return (
     <div>
     <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
        <div className="row align-items-center" >
                   
           <div className="col-md mt-5 mr-0 pr-md-0 mb-3 mb-md-0">                    
               <input onChange={(e)=>setEmail(e.target.value)} name="email" className="form-control form-control-sm input-dark custom-width border-danger font-weight-bold" type="text" placeholder="Email" />
           </div>

           <div onChange={(e)=>setPassword(e.target.value)} className="col-md mt-5 mr-0 pr-md-0 mb-3 mb-md-0">                    
                <input name="password" className="form-control form-control-sm input-dark custom-width border-danger font-weight-bold" type="password" placeholder="Password"/>
           </div >

           <div className="col-md mt-5 mr-0 pr-md-0 mb-3 mb-md-0">                    
                <button className="btn btn-danger btn-sm text-dark font-weight-bold"  >Sign in</button>
           </div>  
         </div>
     </form>    
     </div>    
     
  )
}

