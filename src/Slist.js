import React from 'react';

const Slist = ({ id, name, complete, slistClick }) => (
  <li
    style={ complete ? { ...styles.slist, ...styles.complete } : styles.slist }
    onClick={ () => slistClick(id) }
  >
   { name }
  </li>
);

const styles = {
  slist: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
};

export default Slist;