import React from 'react';
import { withRouter } from 'react-router-dom';

import './card.styles.css';

const Card = ({ item, history}) => (
  console.log(item, history),
  <div className='card-container' onClick={() => history.push(`${item.name}`)}>
    {/* <img
      alt='item'
      src={`${item.img}`}
    /> */}
    <h3> {item.id} </h3>
    <h2> {item.name} </h2> 
    {/* <p> {props.item.description} </p> */}
  </div>
);

export default withRouter(Card);