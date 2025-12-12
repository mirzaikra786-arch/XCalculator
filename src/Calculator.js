import React,{useState} from "react";
//import { useState } from "react";
import styles from "./Calculator.module.css";
export default function Calculator(){

    const [value, setValue]=useState('');
const [result, setResult]=useState('');   

function handleEqual(){
    if(value){setResult(eval(value))}
    else{setResult("Error")}
}
 return(
 <>

<h1 style={{fontFamily:"-apple-system"}}>React Calculator</h1> <br/>
<input type="text" value={value}/> <br/> 
<div className={styles.res}>{result}</div><br/>

<div className={styles.but}>
 <div >
 <button onClick={() => setValue(value + 7)}>7</button> 
 <button onClick={() => setValue(value + 8)}>8</button>
 <button onClick={() => setValue(value + 9)}>9</button>
 <button onClick={() => setValue(value + `+`)}>+</button>
 </div>

<div>
<button onClick={()=>setValue(value + 4)}>4</button>
 <button onClick={() => setValue(value + 5)}>5</button>
 <button onClick={() => setValue(value + 6)}>6</button>
 <button onClick={() => setValue(value + `-`)}>-</button> 
</div>
 
 <div>
<button onClick={() => setValue(value + 1)}>1</button>
<button onClick={() => setValue(value + 2)}>2</button>
 <button onClick={() => setValue(value + 3)}>3</button>
 <button onClick={() => setValue(value + `*`)}>*</button>
 </div>

 <div>
 <button onClick={()=> {setValue(''); setResult('')}}>C</button>
 <button onClick={()=>setValue(value + `0`)}>0</button>
 <button onClick={handleEqual}>=</button>
 <button onClick={() => setValue(value + `/`)}>/</button>
 </div>
</div>
 </>
    );
}