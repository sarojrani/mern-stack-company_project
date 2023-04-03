import React ,{useState}from 'react'

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    
   
    const saveData=async()=>{
        console.log({email,password})
    }
  return (
    <div className='sign-in'>
    <h1>Log-in page</h1>
        <input type="text" placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br/><br/>
        <input type="text" placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
        <button onClick={saveData}>Login</button>
    </div>
  )
  
}

export default Login