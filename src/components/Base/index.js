import React, {useState} from 'react'


export default function Base(){
  let [num, setNum] = useState(0)
  
  const dom = <div>
    <div onClick={()=>{
      setNum(++num)
      console.log(num)
    }}>加</div>
    <div onClick={()=>setNum(--num)}>减</div>
    <div>
      {num}
    </div>
  </div>
  return dom
}