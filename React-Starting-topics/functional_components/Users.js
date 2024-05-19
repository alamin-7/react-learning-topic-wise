import React, { useState } from 'react'

function Users() {

 // let data = "First!!!";
  let [data, New] = useState("old");

 const demo = () => {
  alert("Hello !!");
 };

 const updateData = () => {
   New("Updated data using useState");
 }

  return (
    <div>
    <h1>{data}</h1>

    <button onClick={demo}>Click!</button>
    <button onClick={updateData}>Update</button>
    </div>
  )
}

export default Users