import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [Toured, setToured] = useState(true);
  const [loading, setLoading] = useState(true);

  const RemovedTour = (id)=>{
const newTour = Toured.filter((tour)=> tour.id !== id);
setToured(newTour);
  }
const fetchTours = async()=>{
  try{
    const response = await fetch(url)
    const fetched = await response.json()
    
    setLoading(()=> false)
    setToured(fetched)
  }
  catch(error){
    setLoading(false)
    console.log(error)
  }
 
};
useEffect(()=> {
  fetchTours()
},[]);

if(loading){
  return(
    <main>
      <Loading/>
    </main>
  )
  }
  if(Toured.length === 0){
   return(
    <main>
      <div className="title">
    <h2>no tours left</h2>
    <button onClick={()=> fetchTours()}>Refresh</button>
      </div>
    </main>
   ) 
  }
  return (
   <main>
    <Tours tours={Toured} RemoveTour={RemovedTour}/>
   </main>
  )
  
}

export default App
