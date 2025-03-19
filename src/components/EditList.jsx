import { useState } from 'react';

function EditList({ index, onRemove, onList }) {
  const [edit, onEdit] = useState(false);

  const onHandleEdit = (e) => {
    onEdit(!edit);
  };

  return (
    <div>
      <div>
        {edit ? (
          <form>
            <input type="text"></input>
          </form>
        ) : (
          ''
        )}
      </div>
      <button onClick={onHandleEdit}>Edit</button>
      <button onClick={() => onRemove(index)}>Delete</button>
    </div>
  );
}

export default EditList;
