import React from 'react'

import { Link } from 'react-router-dom'

 

const Navbar = () => {

 return (

   <div>

      <Link to="/login">

               <button className="btn1">Login</button>

             </Link>

 

             <Link to="/signup">

               <button className="btn1">SignUp</button>

             </Link>

   </div>

 )

}

 

export default Navbar