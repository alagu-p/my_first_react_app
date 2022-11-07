
import { useState,useEffect } from 'react';
import './App.css';

const Person =(props) =>{
  return (
    <>
    <h1> Name :{props.name2}</h1>
    <h2> last Name : {props.lastName}</h2>
    <h2> Age : {props.Age}</h2>
    </>

  );
}


const App=()=> {
  const name1='man i';
  const isNameShowing=true;

  const [counter,setCounter]=useState(0);

  useEffect(()=>{
    alert("You've cahnged the counter to "+counter);
  },[counter]);
  return (
    <div className="App">
      <Person name2={'Alagu'} lastName={'Mani'} Age={25} />
      <Person name2={'Reven'} lastName={'x'} Age={24} />
     <h1> Hello, {isNameShowing?name1:'someone'}!</h1>
   <p> {name1 ? (<>{name1}</>):(
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repudiandae corrupti consequuntur. Voluptatem velit nostrum ullam quidem dolore molestiae autem!

   </p>)}
   </p>
    <button onClick={()=>setCounter((prevCount)=>prevCount-1)}>-</button>
    <h1>{counter}</h1>
    <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
    </div>
  );
}

export default App;
