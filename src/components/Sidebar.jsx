import { useState, useCallback } from "react"

export default function Sidebar() {
  let [newMenuItem, setNewMenuItem] = useState("")
  // TODO: 2
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("")

  let addMenuItem = useCallback(() => {
    console.log("Added menu item");
    if (newMenuItem) {
      setMenuItems((prevMenuItems) => [newMenuItem, ...prevMenuItems]);
      setNewMenuItem("");
    }
  }, [newMenuItem]);

  // TODO: 4
  <ul>
    {menuItems
      .filter((item) => item.toLowerCase().includes(filter.toLowerCase()))
      .map((item, index) => (
        <li key={index}>{item}</li>
      ))}
  </ul>


  // TODO: 1
  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button
        onClick={addMenuItem}>Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
    </div>
  )
}
