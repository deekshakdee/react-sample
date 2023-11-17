import React ,{useState}from 'react'        
import "./Header.css";


function Header({name,age}) {
  const [counts,setCounts]=useState(0);
  const [counts1,setCounts1]=useState(100);
  function high()
  {
    setCounts(counts+1);
    //setCounts1(counts1-1);
  }
  function low()
  {
    //setCounts(counts+1);
    setCounts1(counts1-1);
  }


  const[texts,setTexts]=useState([
    {name1:"eat"},
    {name1:"sleep"},
    {name1:"code"}
  ]);
  const[index,setIndex]=useState(0)
  function change(){
    const newindex=(index+1)%texts.length
    setIndex(newindex)
  }


  return (
    <div>
       <button onClick={high}>Increment</button>
       <span>{counts}</span>
       <button onClick={low}>Decrement</button> 
       <span>{counts1}</span>

<br></br><br></br>
       <button onClick={change}>Text change</button>
       <span>{texts[index].name1}</span>

    </div>
  )
};


export default Header;
 