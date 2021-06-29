import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import {data} from './data'
function App() {
  const [isLoading, setisLoading] = useState(true)
  const [tours, setTour] = useState([])
  const removeTour = (id)=>{
    let newTours = tours.filter((tour)=> tour.id!==id)
    setTour( newTours)
  }
  const fetchTours = ()=>{
    setisLoading(true)
    try {
      // const res = await fetch(url)
      // const tours = await res.json()
      setisLoading(false)
      setTour(data)
    } catch (error) {
      setisLoading(false)
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchTours()
  },[])
if (isLoading) {
  return (
    <main>
      <Loading />
    </main>
  )
}
if(tours.length===0){
  return (
    <main>
      <div className="title">
        <h2>No Tours Left</h2>
        <button className="btn" onClick={()=> fetchTours()}>Refresh</button>
      </div>
    </main>
  )
}
  return (<main>
    <Tours tours={tours} removeTour={removeTour}></Tours>
  </main>)
}

export default App
