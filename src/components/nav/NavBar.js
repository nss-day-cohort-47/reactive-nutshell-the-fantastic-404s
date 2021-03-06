import React from "react";
import "./NavBar.css";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/logo.png";

export const NavBar = (props) => {
const history = useHistory();

  const handleLogout = () => {
    sessionStorage.clear();
    history.push("/login")}


  return (
    <nav className="navbar">
      <div>
      <img className="logo" src={logo} alt="logo"/>
      </div>
      <div>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/articles">Articles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/friends">Friends</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/messages">Messages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tasks">Tasks</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/events">Events</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={handleLogout} to="/Login"> Logout </Link>
        </li>
      </ul>
      </div>
    </nav>
  )
}
