import './App.css';
import { LandingPage } from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import Navbar from './Components/Nav_bar/Navbar';



import SignUp from './Components/Sign_up/sign_up';





function App() {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <Login/>
    <SignUp/>
    </>
  );
}

export default App;
