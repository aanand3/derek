import './App.css'
import {NavBar} from "./components/NavBar";
import {Home} from "./components/Home";
import {useState} from "react";
import {MyWork} from "./components/MyWork";
import {AboutMe} from "./components/AboutMe";
import {ComponentOptions} from "./types/ComponentOptions"
import {Contact} from "./components/Contact";
import {Toolbar} from "@mui/material";

function App() {
    const [component, setComponent] = useState(ComponentOptions.Home)
    function componentToRender() {
        switch (component) {
            case ComponentOptions.Home:
                return <Home />
            case ComponentOptions.MyWork:
                return <MyWork/>
            case ComponentOptions.AboutMe:
                return <AboutMe/>
            case ComponentOptions.Contact:
                return <Contact/>
            default:
                return <Home />
        }
    }
    return (
        <>
            <NavBar setComponent={setComponent}/>
            <Toolbar />
            {componentToRender()}
        </>
    )
}

export default App
