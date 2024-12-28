import { useState } from "react";
import "./App.css";
import Items from "./Components/Items";
import AddItem from "./Components/AddItem";
import icon from "./assets/icon.jpg";

function App() {

  const allShoppingLists = JSON.parse(localStorage.getItem("shoppingList"));

  const [shoppingItems, setShoppingItems] = useState(allShoppingLists? allShoppingLists : []);

  const addShoppingItem = (listItem) => {
    setShoppingItems([...shoppingItems, listItem])
    localStorage.setItem("shoppingList",JSON.stringify([...shoppingItems, listItem]))
  }

  const clearList = () => {
    localStorage.removeItem("shoppingList");
    setShoppingItems([])
  }

  return (
    <>

      {/* shopping list  */}

      <div className="container">
        <h3 className="title">Shopping List: <span className="icon-img"><img src={icon} alt="" /></span></h3>
        {shoppingItems.map((data, index) => (
          <Items key={index} data={ data} />
        ))} <br />
        <AddItem onAddingItem={addShoppingItem} />
        <button onClick={clearList}>Clear List</button>
      </div>
      
    </>
  );
}

export default App;
