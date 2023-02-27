import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import People from "./pages/People";
import PersonDetail from "./pages/PersonDetail";
import Paths from "./pages/Paths";
import FullStack from "./pages/FullStack";
import Aws from "./pages/Aws";
import PrivateRouter from "./pages/PrivateRouter";

import Login from "./pages/Login";

function App() {
return(

    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="people" element={<People/>}/>
            <Route path="people/:id" element={<PersonDetail/>}/>

            <Route path="paths" element={<Paths/>}>
             <Route index element={<FullStack/>}/>
            <Route path="aws" element={<Aws/>}/>
           </Route>

           <Route path="contact" element={<PrivateRouter/>}>
           <Route path="" element={<Contact/>}/>
           </Route>
           <Route path="login" element={<Login/>} />
           <Route path="*" element={<NotFound/>} />

        </Routes>
       <Footer/>
    </BrowserRouter>
);
}

export default App;
