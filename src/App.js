import React, { Component } from 'react';
import { BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/profile" component={Profile}/>
            <Route component={Error}/>
           </Switch>
      </BrowserRouter>
    );
  }
}

export default App;




