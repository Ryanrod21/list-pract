import { useState } from 'react';
import './CreateList.css';

function CreateList({ onCreate }) {
  const [itemText, setItem] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemText === '') {
      return;
    }
    onCreate({ item: itemText.trim(), quantity });
    setItem('');
    setQuantity(1);
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const quantityOptions = [...Array(5)].map((_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1}
    </option>
  ));

  return (
    <div className="createListCard">
      <form className="createForm" onSubmit={handleSubmit}>
        <div>
          <h3>Enter Your Items Here</h3>
        </div>

        <input
          type="text"
          value={itemText}
          onChange={handleChange}
          placeholder="Enter Item"
        ></input>

        <label>Quantity:</label>
        <select value={quantity} onChange={handleQuantityChange}>
          {quantityOptions}
        </select>

        <button className="createBtn" type="submit">
          Add List
        </button>
      </form>
    </div>
  );
}

export default CreateList;
