import { useState } from 'react';

function EditList({ index, onList }) {
  //Haven't added this part to code due it breaking

  const [title, setEdit] = useState(onList);

  const handleChange = (event) => {
    setEdit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('New title', title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange} />
      <button>Save</button>
    </form>
  );
}

export default EditList;
