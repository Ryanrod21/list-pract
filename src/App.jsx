import { useState } from 'react';
import CreateList from './components/CreateList';
import ItemList from './components/ItemList';

function App() {
  const [list, setList] = useState([]);

  const onEditList = (id, newItem, newQuantity) => {
    const updateItem = list.map((edit) => {
      if (edit.id === id) {
        return { ...edit, item: newItem, quantity: newQuantity};
      }
      return edit;
    });

    setList(updateItem);
  };

  const addList = ({ item, quantity }) => {
    const updateItem = [
      ...list,
      { id: Math.round(Math.random() * 9999), item, quantity },
    ];

    setList(updateItem);
    console.log(list)
  };

  const handleRemove = (id) => {
    const updateList = list.filter((item) => {
      return item.id !== id;
    });
    setList(updateList);
  };

  return (
    <div>
      <CreateList onCreate={addList} />
      <ItemList onList={list} onRemove={handleRemove} onEditList={onEditList} />
    </div>
  );
}

export default App;
