import ListCard from './ListCard';

function ItemList({ onList, onRemove }) {
  return (
    <div>
      List of Items
      <ListCard onList={onList} onRemove={onRemove} />
    </div>
  );
}

export default ItemList;
