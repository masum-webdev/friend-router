import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friends = (props) => {
  const { name, email, id } = props.friend;
  const friendStyle = {
    border: '2px solid purple',
    margin: '20px',
    padding: '20px',
    borderRadius: '20px'
  }
  const history=useHistory();
  console.log("history1",history);
  const handleClick=(id)=>{
    const url=`/friend/${id}`;
    history.push(url);
  }
  console.log("history2",history);
  return (
    <div style={friendStyle}>
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
     <Link to={`/friend/${id}`}>
       <button>Show Details of id {id}</button>
     </Link>
     <button onClick={()=>handleClick(id)}>Click Details</button>
    </div>
  );
};

export default Friends;