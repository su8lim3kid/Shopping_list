import React from 'react';
import Slist from './Slist';

const List = ({ items, name,slistClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      
   
     { items.map( item => <Slist key={item.id} {...item} slistClick={slistClick} /> )}
    </ul>

  </div>
);


export default List;