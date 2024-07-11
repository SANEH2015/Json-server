import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const traineeDataURL="http://localhost:4000/tranees"

  const [list,setlist] = useState([]);

  useEffect(() =>{
  console.log("effect.run")
  const fetchTranData = async() =>{
try{
const response = await fetch(traineeDataURL);
const traineedata = await response.json();
setlist(traineedata);
console.log("below is the  trainee data",traineedata)
}
catch(error){

}
  }
  },[]

  )

  const car = {type:"Fiat", model:"500", color:"white"};
  const tranee ={name:"Sanele",surname:"Mkhize",color:"black",gender:"female",location:"Empangeni"}

  return (
  
   <h1>
   My name is {tranee.name}<br></br>
   I live at {tranee.location} and my favColor is {tranee.color}
   </h1>
  )
}

export default App
