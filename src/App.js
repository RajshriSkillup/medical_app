import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import './App.css'; 






import Login from './Components/Login/Login';
import SignUp from './Components/Sign_up/sign_up';
import Navbar from './Components/Nav_bar/Navbar';

 

 

function App() { 

  return ( 

<BrowserRouter> 

<Navbar/> 

<Routes> 

<Route path='/' element={<h1>hello</h1>}/> 

  <Route path='/login' element={<Login/>}/> 

  <Route path='/signup' element={<SignUp/>}/> 

  {/* <Route path='/login' element={<Login/>}/> */} 

 

</Routes> 

</BrowserRouter> 

 

   

  ); 

} 

 

export default App; 
      