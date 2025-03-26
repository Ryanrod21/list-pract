import { useState } from 'react';
import EditList from './EditList';
import './ListCard.css';

function ListCard({ list, onRemove, onEditList }) {
  const [showEdit, setEdit] = useState(false);

  const handleDeleteClick = () => {
    onRemove(list.id);
  };

  const handleEditClick = () => {
    setEdit(!showEdit.id);
  };

  const handleSubmit = (id, newItem) => {
    setEdit(false);
    onEditList(id, newItem);
  };

  // const listCard =
  //   list.length === 0 ? (
  //     <h2>No Items Entered</h2>
  //   ) : (
  //     <div key={list.id}>
  //       <li className="nameList">
  //         {list.item
  //           .split(' ')
  //           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))}
  //         ({list.quantity})
  //       </li>
  //     </div>
  //   );

  let content = <h3>{list.item}</h3>;
  if (showEdit) {
    content = <EditList onSubmit={handleSubmit} list={list} />;
  }
  return (
    <div className="allCard">
      <div className="cardList">
        {content}
        <div>
          <button onClick={handleEditClick}> Edit </button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
