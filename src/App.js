import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import "./components/IconsLibrary";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Router>
                <Route path="/portfolio" exact component={Home} />
                <Route path="/projects" exact component={Projects} />
                <Footer />
            </Router>
        </>
    );
}

export default App;
