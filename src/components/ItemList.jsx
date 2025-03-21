import ListCard from './ListCard';
import './ItemList.css'

function ItemList({ onList, onRemove, quantity }) {
  return (
    <div className='allItemList'>
      <h1>List of Items </h1>
      <div className='allCards'>
      <ListCard onList={onList} quantity={quantity} onRemove={onRemove} />
      </div>
    </div>
  );
}

export default ItemList;
