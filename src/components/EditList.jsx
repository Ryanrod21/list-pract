import { useState } from 'react';

function EditList({ list, onSubmit }) {
  const [item, setEdit] = useState(list.item);

  const handleChange = (event) => {
    setEdit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(list.id, item);

    console.log(list.id, item);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={item} onChange={handleChange} />
      <button>Save</button>
    </form>
  );
}

export default EditList;
