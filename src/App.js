import React, { Component } from "react";
import { BrowserRouter as Router ,Route} from "react-router-dom";
import Footer from "./components/Footer"
import "./App.css";
import LandingBg from "./components/LandingBg";
import Intro from "./components/Intro";
import SignUp from "./components/SignUp"
import Platform from "./components/Platform"
import Navbar from "./components/Navbar"
import Sidenav from "./components/Sidenav"
import Information from "./components/Information"
import Downloads from "./components/Downloads"
import Boxes from "./components/Boxes"
import Endbox from "./components/Endbox"
class App extends Component {
  render() {
    return <div className="App">
      <Router>
          <Route exact path="/">
            <LandingBg />
            <Intro />
            <Footer />
          </Route>
          <Route path="/home" component={Platform}><Navbar></Navbar><Sidenav></Sidenav><Boxes></Boxes><Endbox></Endbox></Route>
          <Route path = "/downloads" component={Downloads}><Navbar></Navbar> <Downloads /><Sidenav></Sidenav><Endbox></Endbox></Route>
          <Route path="/blank" component={Platform}> <Information  ></Information><Endbox></Endbox></Route>
          <Route path ="/platform" component={Platform}><Navbar /><Boxes></Boxes> <Sidenav></Sidenav><Endbox></Endbox></Route>
          <Route path="/signup" component={SignUp}></Route>
        </Router>


    </div>;
  }
}

export default App;
