import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
<<<<<<< HEAD
import {Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Profile from "../../pages/profile/Profile";

export default function Topbar() {


  
=======
import { render } from "@testing-library/react";
import Profile from "../../pages/profile/Profile";
import { Link } from "react-router-dom"; 

function Topbar() {

>>>>>>> 64eee9cd28ffe88f2f2e76739c60492e5cd73061
  return (
    <Router>
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
<<<<<<< HEAD
          <span className="topbarLink">Homepage</span>
=======
          <Link to="/" className="span spann">Homepage</Link>
          <span className="topbarLink">Timeline</span>
>>>>>>> 64eee9cd28ffe88f2f2e76739c60492e5cd73061
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>

          <Route component={Profile} path='../../pages/profile/Profile'/>
          

        </div> 
        <Link to="/profile">Profile</Link>
        </div>
<<<<<<< HEAD
=======
        <Link to="/profile" className="btn btn-primary">hello1</Link>
      </div>
>>>>>>> 64eee9cd28ffe88f2f2e76739c60492e5cd73061
    </div>
    </Router>
    

  );
}

export default Topbar;
