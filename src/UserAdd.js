import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//import { API } from "./global";

export function   UserAdd() {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [contact, setContact] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  return (
    <div className="add-user">
      <div className="add-user-form">
      
      <TextField
        id="name"
        label="Name"
        variant="filled"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <TextField
        id="picture"
        label="picture"
        variant="filled"
        onChange={(event) => setPicture(event.target.value)}
        value={picture}
      />
      <TextField
        id="contact"
        label="contact"
        variant="filled"
        onChange={(event) => setContact(event.target.value)}
        value={contact}
      />
      <TextField
        id="id"
        label="id"
        variant="filled"
        onChange={(event) => setId(event.target.value)}
        value={id}
      />
      <TextField
        id="email"
        label="email"
        variant="filled"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
        {/* copy the bookList and add new book */}
        <Button
          variant="contained"
          onClick={() => {
            const newUser = {
              name: name,
              picture: picture,
            contact: contact,
            id: id,
            email: email,
            };
            //1. method: POST
            //2. body -  pass data  -  JSON
            //3. Headers - JSON
            fetch(`https://648bfc4a8620b8bae7ec01dc.mockapi.io/users`, {
              method: "POST",
              body: JSON.stringify(newUser),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then(() => navigate("/users"));
            // .then((bks) => setBookList(bks));

            // setBookList([...bookList, newBook]);
           
          }}
        >
          Add User
        </Button>
      </div>
    </div>
  );
}