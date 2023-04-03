import React, { useState } from 'react'
import './component.css'

const Registration = () => {
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [dob,setDob]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [mobile,setMobile]=useState("")
    const [address,setAddress]=useState("")

    const addData=async()=>{
        console.log({fname,lname,dob,email,mobile,address})
        let data={fname,lname,dob,email,mobile,address}
        let result=await fetch("http://localhost:5000/register",{
            method:'post',
            body:JSON.stringify(data),
            headers:{
                "Content-Type":'application/json'
                
            }
        })
        result=await result.json()
        console.log("r",result)
   
      
    }
  return (
    
         <div className='sign-in'>
      <h1> Registration Page</h1>
       Fname: <input type="text" placeholder='enter first name' value={fname} onChange={(e)=>setFname(e.target.value)} />
        <br/><br/>
       Lname: <input type="text" value={lname} onChange={(e)=>setLname(e.target.value)} placeholder='enter last name' />
        <br/><br/>
       D.O.B: <input type="text" value={dob} onChange={(e)=>setDob(e.target.value)} placeholder='enter your date of birth' />
        <br/><br/>
       Email: <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email' />
        <br/><br/>
        password:<input type="text"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password' />
        <br/><br/>
       Mobile: <input type="text"  value={mobile}  onChange={(e)=>setMobile(e.target.value)} placeholder='enter your mobileNo'/>
        <br/><br/>
        Address:<input type="text"  value={address}  onChange={(e)=>setAddress(e.target.value)} placeholder='enter your address'/>
        <br/><br/>
        <button onClick={addData}>Register</button>
    </div>
  )
    
  
}

export default Registration