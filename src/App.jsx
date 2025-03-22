import { useState } from 'react';
import CreateList from './components/CreateList';
import ItemList from './components/ItemList';

function App() {
  const [list, setList] = useState([]);

  const addList = (newItem) => {
    setList([...list, newItem]);
  };

  const handleRemove = (removeList) => {
    setList(list.filter((name, index) => index !== removeList));
  };

  return (
    <div>
      <CreateList onCreate={addList} />
      <ItemList onList={list} onRemove={handleRemove} />
    </div>
  );
}

export default App;
