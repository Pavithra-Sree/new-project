import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "../Components/Nav.css";
//import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import HomeIcon from '@mui/icons-material/HomeSharp';

const Nav = () => {
    const navigate = useNavigate();
  return (
    <nav className="nav-container">
    <div className="back">
      <IconButton>
        <ArrowBackIosIcon fontSize="medium" onClick={() => navigate(-1)} />
      </IconButton>
      <IconButton>
        <ArrowForwardIosIcon fontSize="medium" onClick={() => navigate(1)} />
      </IconButton>
    </div>
    <div className="link-container"> 
            <Link to="/home">
            <li><HomeIcon fontSize="large" /> </li>
            </Link>
            <Link to="/users">
            <li>Users</li>
            </Link>
            </div>
            <Link to="/about">
            <li>About</li>
            </Link>
            <Link to="/user/add">
            <li>Add-User</li>
            </Link>
            <Link to="/edit/:id">
            <li>Edit</li>
            </Link>
      </nav>
   
  )
};

export default Nav;