import ListCard from './ListCard';
import './ItemList.css';

function ItemList({ onList, onRemove, onEditList }) {
  const renderList = onList.map((list) => {
    return (
      <ListCard
        key={list.id}
        list={list}
        onRemove={onRemove}
        onEditList={onEditList}
      />
    );
  });

  return (
    <div className="allItemList">
      <h1>List of Items</h1>
      <div className="allCards">{renderList}</div>
    </div>
  );
}

export default ItemList;
