import React from 'react'
import "./Contact.css";
const Contact = () => {
  return (
    <>
    <div className="flex-container">
  <div>
    <div>Phone</div>
    <div>8824536494</div>
  </div>
  <div>
    <div>Email</div>
    <div>harshit@gmail.com</div>
  </div>
  <div>
    <div>Address</div>
    <div>Parwati Puram, Kota</div>
  </div>
  </div>
  {/*contact us form*/}
  <div className="container" style={{backgroundColor:'#f1f1f1'}}>
  <form>
  <div className="contact-container">
    <input type="text" id="fname" name="firstname" placeholder="Your name.." required="true"/>
    <input type="text" id="email" name="email" placeholder="Your Email" required="true"/>
    <input type="text" id="phoneno" name="phone" placeholder="Your phone no" required="true"/>
</div>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:200}}></textarea>

    <input type="submit" value="Send Message"/>
  </form>
</div>

    </>
  )
}

export default Contact