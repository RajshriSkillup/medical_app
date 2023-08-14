import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import './App.css'; 






import Login from './Components/Login/Login';

import Navbar from './Components/Nav_bar/Navbar';
import { Landing_Page } from './Components/Landing_Page/Landing_Page';

import Sign_up from './Components/Sign_up/Sign_up';



 

 

function App() { 

  return ( 

<BrowserRouter> 

<Navbar/> 

<Routes> 

<Route path='/' element={<Landing_Page/>}/>

  <Route path='/login' element={<Login/>}/> 

  <Route path='/signup' element={<Sign_up/>}/> 

  {/* <Route path='/login' element={<Login/>}/> */} 

 

</Routes> 

</BrowserRouter> 

 

   

  ); 

} 

 

export default App; 
      