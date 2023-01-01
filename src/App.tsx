import './App.css'
import {NavBar} from "./components/NavBar";
import {Home} from "./components/Home";
import {useState} from "react";
import {MyWork} from "./components/MyWork";
import {AboutMe} from "./components/AboutMe";
import {Component} from "./types/Component"
import {Contact} from "./components/Contact";

function App() {
    const [component, setComponent] = useState(Component.Home)
    function componentToRender() {
        switch (component) {
            case Component.Home:
                return <Home />
            case Component.MyWork:
                return <MyWork/>
            case Component.AboutMe:
                return <AboutMe/>
            case Component.Contact:
                return <Contact/>
            default:
                return <Home />
        }
    }
    return (
        <>
            <NavBar setComponent={setComponent}/>
            {componentToRender()}
        </>
    )
}

export default App
