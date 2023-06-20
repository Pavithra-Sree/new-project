
import React from "react";
import "./Components/Nav.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
const Layout = () => {
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
            <li>Home</li>
            </Link>
            <Link to="/users">
            <li>Users</li>
            </Link>
            </div>
      </nav>
   
  )
};

export default Layout;