import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AddExcercise from "./pages/AddExcercise"
import EditExercise from "./pages/EditExercise"
import GetExcercise from "./pages/GetExcercise"
import NotFound from "./pages/NotFound"
import Navigation from "./component/Navigation"
import { useEffect, useState } from 'react';

function App() {
  const [login,SetLogin] = useState(false)
 
  useEffect(()=>{
    const Token = localStorage.getItem("Token")
    if(Token==null){
      SetLogin(false)
    }
    else{
      SetLogin(true)
    }
  },[])

  return (
    <>
    <BrowserRouter>
    <Navigation login={login}/>

    {
     login
     ? 
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/AddExcercise" element={<AddExcercise/>}></Route>
      <Route path="/EditExercise/:id" element={<EditExercise/>}></Route>
      <Route path="/GetExcercise" element={<GetExcercise/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
    </Routes>
     :
    
 <Routes>
 <Route path="/" element={<Home/>}></Route>
 <Route path="/login" element={<Login/>}></Route>
 <Route path="/register" element={<Register/>}></Route>
 <Route path="/*" element={<NotFound/>}></Route>
</Routes>
    
    }
    
    
    
    
   
    
    </BrowserRouter>
    </>
  );
}

export default App;