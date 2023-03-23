import classes from './test.module.scss'
import React, {useState} from 'react'

export function InputText(props){
  const[email, setEmail]=useState("");
  const[pw,setPw]=useState("")

  return(
    <div>
      <input type="text" className={classes.text} placeholder={props.detail} value={email} onChange={(e)=>setEmail(e.target.value)} />
    </div>
  );
}

export  function IDVal(props){
  const[ID,setID]=useState("");

  return(
    <div>
      <input type="text"/>
    </div>
  )
}