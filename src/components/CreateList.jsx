import { useState } from 'react';
import './CreateList.css';

function CreateList({ onCreate, onQuantity}) {
  const [itemText, setItem] = useState('');
  const [quantity, setQuantity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemText === ''){
      return;
    }
      onCreate(itemText.trim());
      setItem('');
      setQuantity(1);

  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
    console.log(setQuantity)
  }

  const quantityOptions = [...Array(5).keys()].map((num) => (
    <option  key={num + 1} value={num + 1}>
      {num + 1}
    </option>
  )
)

  return (
    <div className='createListCard'>
      <form className='createForm' onSubmit={handleSubmit}>
        <div><h3>Enter Your Items Here</h3></div>
        <input
          type="text"
          value={itemText}
          onChange={handleChange}
          placeholder="Enter Item"
        ></input>

        <label>Quantity:</label>
        <select
        value={quantity}
        onChange={handleQuantityChange}
        >
          {quantityOptions}
        </select>

        <button className='createBtn' type="submit">Add List</button>
      </form>
    </div>
  );
}

export default CreateList;
