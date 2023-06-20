import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Provider, LikeButton } from "@lyket/react";
import { Counter } from "./counter";
import CreateIcon from '@mui/icons-material/Create';
import { Link, useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
export default function UserList() {

    const [userList, setUserList] = useState([]);
    //const [mode, setMode] = useState("light");
    const navigate = useNavigate();
    const getUsers = () => {
  
      fetch("https://648bfc4a8620b8bae7ec01dc.mockapi.io/users", {
  
      method: "GET",
        })
  .then((data) => data.json())
  .then((user) => setUserList(user));
  // .then((user) => console.log(user));

  };
  
  useEffect(() => getUsers(), []);
  //const navigate = useNavigate();
    return (
      <div className="UserList">
            {userList.map((m) =>  {
  return (
  
    <div className="cards">
    <Card sx={{ maxWidth: 400 }}>
    <CardMedia
            component="img"
            height="300"
            font-family = "algerian"
            font-size= "10"
            image={m.avatar}
            alt={m.name}
            
          />
          <CardContent>
            
            <Typography gutterBottom variant="h6" component="div">
              <h1>{m.name}</h1>
              <counter />
              <hr></hr>
            </Typography>
              {/* <img src={m.avatar} alt={m.name}></img> */}
              <Typography variant="body2" color="text.secondary">
              <p><b>Contact:</b> {m.contact}</p>
              <p><b>Employee_ID:</b> {m.id}</p>
              <p><b>Email:</b> {m.email}</p>
              <IconButton
      onClick={() => navigate(`/edit/${m.id}`)}
      > 
      <CreateIcon>
      </CreateIcon>
      </IconButton>
              <Counter/>
              {/* <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
    <LikeButton
      namespace="testing-react"
      id="everybody-like-now"
    />
    <counter />
  </Provider> */}
              {/* <p><b>Password:</b> {m.password}</p> */}
              
              </Typography>
          </CardContent>
    </Card>
    </div>
  
  )
            }       
            )}
  
      </div>
   
    );
  
  }
  