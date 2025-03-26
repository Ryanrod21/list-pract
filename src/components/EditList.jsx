import { useState } from 'react';

function EditList({ list, onSubmit }) {
  const [item, setEdit] = useState(list.item);
  const [quantity, setEditQuan] = useState(list.quantity)

  const handleChange = (event) => {
    setEdit(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setEditQuan(Number(event.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(list.id, item, quantity);

    console.log(list.id, item, quantity);
  };

  const quantityOptions = [...Array(5)].map((_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1}
    </option>
  ));

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label>Enter new Item:</label>
      </div>

      <input value={item} onChange={handleChange}></input>

      <select value={quantity} onChange={handleQuantityChange}>
        {quantityOptions}
      </select>
      
      <button>Save</button>
    </form>
  );
}

export default EditList;
