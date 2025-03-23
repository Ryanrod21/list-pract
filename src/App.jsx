import { useState } from 'react';
import CreateList from './components/CreateList';
import ItemList from './components/ItemList';

function App() {
  const [list, setList] = useState([]);

  const onEditList = (item, newItem) => {
    const updateItem = list.map((lists) => {
      if (list === lists) {
        return { ...list, title: newItem };
      }
      return item;
    });

    setList(updateItem);
  };

  // Added the ID random here

  const addList = (title) => {
    setList([...list, { id: Math.round(Math.random() * 9999), title }]);
  };

  const handleRemove = (removeList) => {
    setList(list.filter((name, index) => index !== removeList));
  };

  return (
    <div>
      <CreateList onCreate={addList} />
      <ItemList onList={list} onRemove={handleRemove} onEditList={onEditList} />
    </div>
  );
}

export default App;
