import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav"
import Footer from "./components/Footer"

function App() {
return(

    <div className="container">
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/instructors" element={<Instructors/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
           
        </Routes>
       <Footer/>
    </div>
);
}

export default App;
