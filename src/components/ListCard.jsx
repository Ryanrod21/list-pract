import EditList from './EditList';

function ListCard({ onList, onRemove }) {
  const listCard =
    onList.length === 0 ? (
      <li>No items here</li>
    ) : (
      onList.map((item, index) => (
        <li key={index}>
          {item} <EditList index={index} onRemove={onRemove} onList={onList} />
        </li>
      ))
    );

  return <div>{listCard}</div>;
}

export default ListCard;
