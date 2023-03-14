import React, {useState} from 'react'
import {NavLink, useHistory} from "react-router-dom";

const Login = () => {
   const history = useHistory
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginUser = async (e) => {
   e.preventDefault();

   const res = await fetch('/signin',{
      method:"POST",
      headers:{
         "Content-Type" : "application/json"
      },
      body:JSON.stringify({
         email,
         password
      })
   });
   const data = res.json();

   if(res.status===400 || !data)
   {
      window.alert("Invalid Credentials");
   } else {
      window.alert("Login Successful");
      history.push("/");
   }
  }
  return (
   <>
  <section className="signup">
       <div className="container mt-5">
         <div className="signup-content">
            <div className="signup-form">
               <h2 style={{textAlignVertical: "center",textAlign: "center",}} className="form-title">Sign up</h2>
               <form method="POST" style={{textAlignVertical: "center",textAlign: "center",}} className="register-form" id="register-form">
                   
                   <div className='form-group'>
                    <input type="text" name="email" id="email" autoComplete="off"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder='Your Email'
                    />
                   </div>

                   <div className='form-group'>
                    <input type="text" name="password" id="password" autoComplete="off"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder='Your paasword'
                    />
                   </div>

                   <div className='form-group form-button'>
                    <input type="submit" name="login" id="login" className='form-submit'
                    value="Log In"
                    onClick={loginUser}
                    />
                   </div>
                   <div>
                    <NavLink to="/signup" className="signup-link-image">Create an account</NavLink>
                   </div>
               </form>
            </div>
         </div>
       </div>
      </section>
   </>
  )
}

export default Login