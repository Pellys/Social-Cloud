import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { render } from "@testing-library/react";
import Profile from "../../pages/profile/Profile";
import { Link } from "react-router-dom"; 

function Topbar() {

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" className="logo" >Socialcloud</Link>
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
        <Link to="/profile">
        <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
