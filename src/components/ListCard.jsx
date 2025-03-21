import EditList from './EditList';
import './ListCard.css'

function ListCard({ onList, onRemove, quantity }) {


  const listCard =
    onList.length === 0 ? (
      <h2 className='noItems'>No items here</h2>
    ) : (
      onList.map((item, index) => (
        <div  className='cardList'>
          <li className='nameList' key={index}> {item.split(' ')
            .map(word => word.charAt(0)
            .toUpperCase() + word
            .slice(1))
            .join(' ')} 
            ({quantity})
          </li>
          <div className='cardEditDelete'>
            <EditList onList={onList} />
            <button className='deleteBtn' onClick={() => onRemove(index)}>Delete</button>
          </div> 
        </div>
      )) 
    );

  return <div className='allCard'>{listCard}</div>;
}

export default ListCard;
