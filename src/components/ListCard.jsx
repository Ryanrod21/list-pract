import { useState } from 'react';
import EditList from './EditList';
import './ListCard.css';

function ListCard({ list, onRemove, onEditList }) {
  const listCard =
    list.length === 0 ? (
      <h2>No Items Entered</h2>
    ) : (
      <div className="cardList" key={list.id}>
        <li className="nameList">
          {list.item
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))}
          ({list.quantity})
        </li>
      </div>
    );

  return <div className="allCard">{listCard}</div>;
}

export default ListCard;
