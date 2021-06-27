//import logo from './logo.svg';
// import React, { useState } from 'react'
import Home from "./Home"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import Navbar from "./Navbar"
// import Cart from './Cart'


function App() {
  // const [cartjs, setCartjs]= useState([]);
  return (
    <Router>
      {/* <Navbar/> */}
      <Switch>
        <Route exact path="/">
          <Home 
            // setCartjs={setCartjs}
          />
        </Route>
        {/* <Route path="/cart">
          <Cart 
            // cartjs=
            // setCartjs={setCartjs}
          />
        </Route> */}
        
      </Switch>
    </Router>
  );
}

export default App;
