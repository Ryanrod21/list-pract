import ListCard from './ListCard';
import './ItemList.css';

function ItemList({ onList, onRemove, onEditList }) {
  // const renderList = onList.map((list) => {
  //   return <ListCard key={list} onRemove={onRemove} onEditList={onEditList} />;
  // });

  // return (
  //   <div className="allItemList">
  //     <h1>List of Items</h1>
  //     <div className="allCards">{renderList}</div>
  //   </div>
  // );

  // The top is a map I tried to do in the course
  // don't know if I need a redered list like the course did

  return (
    <div className="allItemList">
      <h1>List of Items </h1>
      <div className="allCards">
        <ListCard onRemove={onRemove} onList={onList} onEditList={onEditList} />
      </div>
    </div>
  );
}

export default ItemList;
