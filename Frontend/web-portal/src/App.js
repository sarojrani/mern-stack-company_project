import React from 'react';
import Nav from './Nav';
import Registration from './Registration';
import Login from './Login';
import UpdateProfile from './UpdateProfile';
// import Protected from './Protected';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
      {/* <Route path='/site' element={<Home/>}></Route>    */}
<Route path='/signin' element={<Registration/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/edit-profile' element={<UpdateProfile/>}></Route>


      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App