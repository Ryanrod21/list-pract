import { useState } from 'react';
import CreateList from './components/CreateList';
import ItemList from './components/ItemList';

function App() {
  const [list, setList] = useState([]);
  const [quantity, setQuantity] = useState();

  const addList = (newItem) => {
    setList([...list, newItem]);
  };

  const addQuantity = (newQuantity) => {
    setQuantity([...quantity, newQuantity])
  }

  const handleRemove = (removeList) => {
    setList(list.filter((name, index) => index !== removeList));
  };

  return (
    <div>
      <CreateList onCreate={addList} onQuantity={addQuantity} />
      <ItemList onList={list} quantity={quantity} onRemove={handleRemove} />
    </div>
  );
}

export default App;
