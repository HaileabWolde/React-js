import React, { useState } from 'react';

const Tour = ({id, name, image, info, price, RemoveTour}) => {
  const [readmore, setReadmore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name}/>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readmore? info: `${info.substring(0, 200)}....`
          }
        <button onClick={()=> setReadmore(!readmore)}>
          {readmore ? 'showLess':'showMore'}
          </button>
        </p>
        <button className='delete-btn' onClick={()=>RemoveTour(id)}>not Interested</button>
      </footer>
    </article>
  )
};

export default Tour;
