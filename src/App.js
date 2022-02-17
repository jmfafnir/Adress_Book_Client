import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";


function App() {

  const [contacts, setContacts] = useState([]);
  const [info, setInfo] = useState({});
  const getContactsUrl = 'http://192.168.20.209:23000/api/Adress_Book'

  const fetchContacts = (geturl) => {
    fetch(geturl)
    .then(response => response.json())
    .then(data => setContacts(data))
    .catch(error => console.log(error));

  };

  useEffect(()=>{
    fetchContacts(geturl);
  },[])

  return (
    <Navbar></Navbar>
  );
}

export default App;
