import ListCard from './ListCard';
import './ItemList.css';

function ItemList({ onList, onRemove, onEditList }) {
  const renderList = onList.map((lists) => {
    return (
      <ListCard
        key={lists.id}
        list={lists}
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
