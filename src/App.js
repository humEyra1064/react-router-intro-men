import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import People from "./pages/People";
import PersonDetail from "./pages/PersonDetail";

function App() {
return(

    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/people" element={<People/>}/>
            <Route path="/people/:id" element={<PersonDetail/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
           
        </Routes>
       <Footer/>
    </BrowserRouter>
);
}

export default App;
