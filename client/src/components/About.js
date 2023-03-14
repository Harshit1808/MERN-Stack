import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

const About = () => {
  const history = useHistory();
  const callAboutPage= async ()=>{
   try{
    const res =await fetch('/about',{
      method:"GET",
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json"
      },
      credentials:"include"
    });
    const data = await res.json();
    console.log(data);

    if(res.status===200){
      const error=new Error(res.error);
      throw error;
    }
   }catch (err) {
    console.log(err);
    history.push('/login');
   }
  }
  useEffect(()=>{
    callAboutPage();
  }, []);
  return (
    <div style={{margin:250 ,textAlign:'center'}}>
        <p style={{color:'blue'}}>WELCOME</p>
        <h2>WE ARE THE MERN DEVELOPER</h2>
    </div>
  )
}

export default About