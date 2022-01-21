import React from 'react';

interface list {
    itemList : {}[],
}

const ItemList:React.FC<list> = ({itemList}) => {
  return (<div>
        <ul> 
            {itemList.map((x,index) => {
                return <li key={index}>123 </li>
            })}
        </ul>
  </div>);
};

export default ItemList;
