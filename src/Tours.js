import React from 'react';
import Tour from './Tour';
const Tours = ({tours, RemoveTour}) => {
  return (
    <section>
      <div className='title'>
        <h2>Ours Component</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour)=> {
          return <Tour {...tour} RemoveTour={RemoveTour}/>
        })}
      </div>
    </section>
  );
};

export default Tours;
