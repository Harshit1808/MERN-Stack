import React, {useState} from 'react'
import { NavLink , useHistory} from 'react-router-dom'
//import { getMaxListeners } from '../../../server/model/userSchema';
const Signup = () => {
  const history = useHistory();
  const [user,setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });
  let name, value;
  const handleInputs=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user, [name]:value});
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword} =user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });
    const data = await res.json();
    if(res.status === 422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
      window.alert("Registration Successful");
      console.log("Successful Registration");

      history.push("/login");
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
                    <input type="text" name="name" id="name" autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder='Your Name'
                    />
                   </div>

                   <div className='form-group'>
                    <input type="text" name="email" id="email" autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder='Your Email'
                    />
                   </div>

                   <div className='form-group'>
                    <input type="text" name="phone" id="phone" autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder='Your phone no'
                    />
                   </div>

                   <div className='form-group'>
                    <input type="text" name="work" id="work" autoComplete="off"
                    value={user.work}
                    onChange={handleInputs}
                    placeholder='Your Profession'
                    />
                   </div>

                   <div className='form-group'>
                    <input type="text" name="password" id="password" autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder='Your password'
                    />
                   </div>

                   <div className='form-group'>
                    <input type="text" name="cpassword" id="cpassword" autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder='Confirm Your password'
                    />
                   </div>

                   <div className='form-group form-button'>
                    <input type="submit" name="signup" id="signup" className='form-submit'
                    value="Register" onClick={PostData}
                    />
                   </div>
                   <div>
                    <NavLink to="/login" className="sign=up-link-image">I am already registered</NavLink>
                   </div>
               </form>
            </div>
         </div>
       </div>
      </section>
    </>
  )
}

export default Signup