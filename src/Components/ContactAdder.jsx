import React, { useState } from 'react'

const ContactAdder = (props) => {

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [location, setLocation] = useState("")

  const onClickHandler = () => {
   
    const contactData = { name: name, number: number, location: location }
    console.log(contactData)

    if (name.length < 1 || number.length < 1 || location.length < 1) {
      alert("Please fill all the fields")
    } else {

      props.onContactAdded(contactData);
      setName("")
      setNumber("")
      setLocation("")
    }
    
 }
  return (
    <>
      <h2>ContactAdder</h2>

      <input type="text" name="" id="" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} required /> <br />
      
      <input type="text" name="" id="" value={number} placeholder='Phone number' onChange={(e) => setNumber(e.target.value)} required/> <br />
      
      <input type="text" name="" id="" value={location} placeholder='Address' onChange={(e) => setLocation(e.target.value)} required/>
      <br />
      
      <button onClick={onClickHandler}>Add to contact</button>

    </>

  )
}

export default ContactAdder