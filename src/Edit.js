import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


export function Edit() {
  const { id } = useParams();

  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`https://648bfc4a8620b8bae7ec01dc.mockapi.io/users`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((bk) => setUser(bk));
  }, []); //call only once

  console.log(user);

  return user ? <EditUserForm user={user} /> : "Loading...";
}

function EditUserForm({ user }) {
  const [name, setName] = useState(user.name);
  const [picture, setPicture] = useState(user.picture);
  const [contact, setContact] = useState(user.contact);
  const [id, setId] = useState(user.id);
  const [email, setEmail] = useState(user.email);

  const navigate = useNavigate();
  return (
    <div className="edit-user-form">
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
        color="success"
        variant="contained"
        onClick={() => {
          const updatedUser = {
            name: name,
            picture: picture,
            contact: contact,
            id: id,
            email: email,
          };
          //1. method: POST
          //2. body -  pass data  -  JSON
          //3. Headers - JSON
          fetch("https://648bfc4a8620b8bae7ec01dc.mockapi.io/users/${user.id}", {
            method: "PUT",
            body: JSON.stringify(updatedUser),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then(() => navigate("/users"));
          // .then((bks) => setBookList(bks));

          // setBookList([...bookList, newBook]);
          // console.log(newBook);
        }}
      >
        SAVE
      </Button>
    </div>
  );
}