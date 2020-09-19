import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
  const {friendId}=useParams();
  const [friend,setFriend]=useState({});
  const {name,email,phone,website}=friend;
  const friendDetailsStyle = {
    border: '2px solid purple',
    margin: '20px',
    padding: '20px',
    borderRadius: '20px'
  }
  useEffect(()=>{
    const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setFriend(data));
  },[]);
  const webUrl=`https://${website}`
  return (
    <div style={friendDetailsStyle}>
     <h2>Name: {name}</h2>
  <p>Email: {email}</p>
  <p>Phone: {phone}</p>
  <h5> <a href={webUrl}>{website}</a> </h5>
    </div>
  );
};

export default FriendDetails;