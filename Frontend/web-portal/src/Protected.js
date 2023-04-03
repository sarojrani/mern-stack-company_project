import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const{Compomnent}=props;
    const navigate=useNavigate()
    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(!login){
       navigate('login')
        }
    })
  return (
    <div>
        <Compomnent/>
    </div>
  )
}

export default Protected