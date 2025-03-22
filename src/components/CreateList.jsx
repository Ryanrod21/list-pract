import { useState } from 'react';
import './CreateList.css';

function CreateList({ onCreate }) {
  const [itemText, setItem] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemText === '') {
      return;
    }
    onCreate({ 'list-item': itemText.trim(), 'list-quantity': quantity });
    setItem('');
    setQuantity('');
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);

    console.log(quantity);
  };

  const quantityOptions = [...Array(5).keys()].map((num) => (
    <option key={num} value={num + 1}>
      {num + 1}
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
