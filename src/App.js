import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Component/Layout/Main/Main";
import Login from "./Component/Form/Login/Login";
import Singup from "./Component/Form/Singup/Singup";
import Home from "./Page/Home/Home";
import './App.css'
import Priceing from "./Component/Priceing/Priceing";

function App() {


  
 
  return (
    <>

<BrowserRouter>
            <Main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/singup' element={<Singup />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/price' element={<Priceing />} />
                </Routes>
            </Main>
        </BrowserRouter>
        
    </>
  );
}

export default App;
