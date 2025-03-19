import { useState } from 'react';

function CreateList({ onCreate }) {
  const [itemText, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemText === '') {
      return;
    } else {
      onCreate(itemText.trim());
      setItem('');
    }
  };

  const handleChange = (e) => {
    if (e.target.value === '') {
      return;
    }
    setItem(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={itemText}
          onChange={handleChange}
          placeholder="Enter Item"
        ></input>
        <button type="submit">Add List</button>
      </form>
    </div>
  );
}

export default CreateList;
