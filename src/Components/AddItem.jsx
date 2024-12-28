import React, { useState } from 'react'

const AddItem = (props) => {

  const [item, setItem] = useState("")

  const addItem = () => {
    if (item.length < 1) {
      alert('Please add an item')
    } else {
      props.onAddingItem(item)
      setItem("")
    }   
  }



  return (
    <>
      <input type="text" name="" id="" placeholder='Add Item' value={item} onChange={(e) => setItem(e.target.value)} /> <br />
      <button onClick={addItem}>Add</button>
     
    </>
  )
}

export default AddItem