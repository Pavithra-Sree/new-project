//import logo from './logo.svg';

import { Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Nav from "./Components/Nav";
//import { Counter } from "./Counter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
//import Feed from "./Components/Feed";
//import Player from "./Components/Video/Player";
//import Create from "./Components/Video/Create";
//import { useEffect, useState } from "react";
//import NewData from "./Components/Music/NewData";
import About from "./About";
//import Contact from "./Components/Contact";
import {Edit} from "./Edit";
import Home from "./Components/Home";
import UserList from './userList';
import {UserAdd} from "./UserAdd";
//import {Button,IconButton, InfoIcon} from "@mui/material";


function App() {
  const [show, setShow] = useState(true);
  const summaryStyle = {
    display: show ? "block" : "none",
  };
  const navigate = useNavigate();
    return(
    
    <div className="App">
    <Nav/>
    {/* <BrowserRouter> */}
      <Routes>
         {/* <Route path="/" element={<Layout />}>  */}
         {/* <Route path="/" element={<Feed data={data} />} /> */}
         <Route path="/home" element={<Home />} /> 
         <Route path="/users" element={<UserList />} />
         <Route path="/about" element={<About />} />
         <Route path="/user/add" element={<UserAdd />} /> 
         
         <Route path="/edit/:id" element={<Edit />} /> 
      </Routes>
    {/* </BrowserRouter>   */}
   {/* //<Header/> */}
   {/* <IconButton
        aria-label="toggle"
        onClick={() => setShow(!show)}
        color="primary"
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      <IconButton
        aria-label="info"
        onClick={() => navigate(`/userss/${id}`)}
        color="primary"
      >
        <InfoIcon />
      </IconButton> */}
      {/* <button onClick={() => setShow(!show)}>Toggle description</button> */}
      {/* <button onClick={() => navigate("/books/" + id)}>Info</button> */}
      {/* <p style={summaryStyle} className="book-summary">
              {book.summary}
            </p> */}
      {/* {show ? <p className="user-email">{user.email}</p> : null}
      <Counter /> {deleteButton} {editButton} */}
{/* console.log(newUser); */}
    </div>
    
  );
}

export default App;
