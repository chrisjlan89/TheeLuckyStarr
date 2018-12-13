import React, { Component } from 'react';
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Home from "./Components/Home/"
// import Gallery from "./Components/Gallery";
import ContactForm from "./Components/ContactForm";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import logo from './logo.svg';
import './App.css';
import Cabin from './Components/Cabin';
import Venue from './Components/Venue';


class App extends Component {
  render() {
    return (
      <div className="App">
      
      <header>
    
    </header>
   
    <Router>
    <div>
    <Nav/>
      <Switch>
             
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/cabin" component={Cabin}/>
        <Route exact path = "/venue" component={Venue}/>    
        <Route exact path = "/form" component={ContactForm}/>         
      </Switch>
      
    </div>
  </Router>

    <footer>
    <Footer/>
    </footer>
     
        
        
     
      </div>
    );
  }
}

export default App;


// <div className="App">
     
        
//         <Router>
//         <div>
//         <Nav/>
//           <Switch>
                 
//             <Route exact path = "/" component={Home}/>
//             <Route exact path = "/gallery" component={Gallery}/>
//             <Route exact path = "/Form" component={ContactForm}/>         
//           </Switch>
//           <Footer/>
//         </div>
//       </Router>
     
//       </div>