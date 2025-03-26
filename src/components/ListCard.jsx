import { useState } from 'react';
import EditList from './EditList';
import './ListCard.css';

function ListCard({ list, onRemove, onEditList }) {
  const [showEdit, setEdit] = useState(false);

  const handleDeleteClick = () => {
    onRemove(list.id);
  };

  const handleEditClick = () => {
    setEdit(!showEdit.id, showEdit.quantity);
  };

  const handleSubmit = (id, newItem, newQuantity) => {
    setEdit(false);
    onEditList(id, newItem, newQuantity);
  };

  let content = (
    <div key={list.id}>
      <li className="nameList">
        {list.item
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))}
        ({list.quantity})
      </li>
    </div>
  );
  if (showEdit) {
    content = <EditList onSubmit={handleSubmit} list={list} />;
  }

  return (
    <div className="allCard">
      <div className="cardList">
        {content}
        <div className='cardEditDelete'>
          <button onClick={handleEditClick}> Edit </button>
          <button className='deleteBtn' onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
