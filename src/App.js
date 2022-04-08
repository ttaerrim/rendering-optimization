import { useState, useMemo } from "react";
import ItemList from "./ItemList";

export default function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const handleItem = (event) => {
    setItem(event.target.value);
  };
  const handleSubmit = (event) => {
    setItemList([...itemList, item]);
    event.preventDefault();
    setItem("");
  };
  const itemCount = (item) => {
    console.log("item 개수를 셉니다");
    return item.length;
  };
  const len = useMemo(() => itemCount(itemList), [itemList]);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={handleItem} value={item} />
        <button type="submit">전송</button>
      </form>
      <ItemList items={itemList} />
      <p>itemList 개수는 {len}개</p>
    </div>
  );
}
