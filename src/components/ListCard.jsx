import { useState } from 'react';
import EditList from './EditList';
import './ListCard.css';

function ListCard({ onList, onRemove, onEditList }) {
  // const onHandleEdit = () => {
  //   <EditList onList={onList} />;
  // };

  // Since adding the ID. It can't read length or split in the code below
  // Don't know if I shoud redo the bottom
  const listCard =
    onList.length === 0 ? (
      <h2 className="noItems">No items here</h2>
    ) : (
      onList.map((item, index) => (
        <div className="cardList">
          <li className="nameList" key={index}>
            {item['list-item']
              .split(' ')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
            ({item['list-quantity']})
          </li>
          <div className="cardEditDelete">
            <button onClick={() => onHandleEdit(index)}>Edit </button>
            <button className="deleteBtn" onClick={() => onRemove(index)}>
              Delete
            </button>
          </div>
        </div>
      ))
    );

  return <div className="allCard">{listCard}</div>;
}

export default ListCard;
