import React,{useState} from 'react'
import Container from './Container'
import Axios from 'axios'


export default function Home() {

    const [username,setUsername]= useState('')
    const [age,setAge]= useState('')
    const [email,setEmail]= useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    const [password,setPassword]= useState('')
    const [confirmPassword,setConfirmPassword]=useState('');


    async function handleSubmit(e){
         e.preventDefault()

         try{

           if(password===confirmPassword){
             await Axios.post("http://localhost:8080/bcs/auth/signup",{username, age, email,phoneNumber, password, confirmPassword})
             alert("Successfully Registered")
             //Now we will empty the input field
             setUsername('')
             setAge('') 
             setEmail('')
             setPhoneNumber('')
             setPassword('')
             setConfirmPassword('')
           }else{
               alert('Password & confirmPassword not matched')
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
               alert("Error during Sign Up"+error)
          } 
         }
     }
  return (
     <>
     
     <Container wide={true}>
         <div className="row align-items-center">
               <div className="col-lg-7 py-3 py-md-5">
                    <h1 className="display-3">Empowering Hope, Defeating Cancer</h1>
                    <p className="lead text-muted">
                         We understand the physical, emotional, and psychological impact that a cancer diagnosis can have on individuals and their loved ones. That's why our highly skilled team of surgeons, oncologists, and medical professionals work tirelessly to deliver personalized care with utmost compassion and empathy.  At Bihar Cancer Surgical, your health and well-being are our top priorities,  we strive to make a positive impact in the lives of those affected by cancer. Together, let's fight cancer and embrace a future filled with healing, resilience, and renewed hope.
                    </p>
               </div>

               <div className="col-lg-5 pl-lg-5 py-lg-5 pb-3">
                    <form onSubmit={handleSubmit}>
                         
                         <div className="form-group">
                              <label for="username-register" className="lead text-muted mb-1" >
                                   <small>UserName</small>
                              </label>
                              <input value={username} onChange={e=>setUsername(e.target.value)} id="username-register" name="username" className="form-control text-white bg-dark border-danger font-weight-bold" type="text" placeholder="Enter Your Name"/>
                         </div>

                         <div className="form-group">
                              <label for="age-register" className="lead text-muted mb-1" >
                                   <small>Age</small>
                              </label>
                              <input value={age} onChange={e=>setAge(e.target.value)} id="age-register" name="age" className="form-control text-white bg-dark border-danger font-weight-bold " type="text" pattern="[1-9][0-9]?" placeholder="Enter your Age"/>
                         </div>

                         <div className="form-group">
                              <label for="email-register" className="lead text-muted mb-1" >
                                   <small>Email</small>
                              </label>
                              <input value={email} onChange={e=>setEmail(e.target.value)} id="email-register" name="email" className="form-control text-white bg-dark border-danger font-weight-bold" type="email" placeholder="Enter your Email"/>
                         </div>
                         <div className="form-group">
                              <label for="number-register" className="lead text-muted mb-1" >
                                   <small>Phone-Number</small>
                              </label>
                              <input value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)} id="number-register" name="phoneNumber" className="form-control text-white bg-dark border-danger font-weight-bold" type="tel" required pattern="\d{10}" placeholder="Enter your phone number"/>
                              <div class="invalid-feedback">
                                 Please enter a valid 10-digit phone number.
                              </div>
                         </div>


                         <div className="form-group">
                              <label for="password-register" className="lead text-muted mb-1" >
                                   <small>Password</small>
                              </label>
                              <input value={password} onChange={e=>setPassword(e.target.value)} id="password-register" name="password" className="form-control text-white bg-dark border-danger font-weight-bold" type="password" placeholder="Create your Password"/>
                         </div>
                         <div className="form-group">
                              <label for="confirm-password" className="lead text-muted mb-1" >
                                   <small>Re-Enter Password</small>
                              </label>
                              <input value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} id="confirm-password" name="confirmPassword" className="form-control text-white bg-dark border-danger font-weight-bold" type="password" placeholder="Confirm your Password"/>
                         </div>

                              <button type="submit" className="btn btn-danger bt-lg btn-block text-dark font-weight-bold border-dark">Let's Connect with BCS</button>
 
                    </form>
               </div>
          </div>             
     </Container>
     </>
     )
}
