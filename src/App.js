import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import "./components/IconsLibrary";
import ScrollToTop from "react-router-scroll-top";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Switch>
                    <Route path="/portfolio" exact component={Home} />
                    <Route path="/projects" exact component={Projects} />
                    <Route component={Home} />
                </Switch>

                <Footer />
            </Router>
        </>
    );
}

export default App;
