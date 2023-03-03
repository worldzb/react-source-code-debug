import React, {
  useEffect, useState, 
  useLayoutEffect, useMemo, 
  useCallback,
  useReducer,
  useInsertionEffect,
  useId,
  useTransition,
  useDeferredValue,
  Suspense
} from 'react'
import ReactDOM from 'react-dom'

export default function Base(){
  let [num, setNum] = useState(0)
  let [num2, setNum2] = useState(0)
  let [num3, setNum3] = useState(0)
  let [num4, setNum4] = useState(0)
  let [num5, setNum5] = useState(0)

  let deferNum =  useDeferredValue(num)

  const [isPending, startTransition] = useTransition(1000)
  const [isPending2, startTransition2] = useTransition(1000)

  // useEffect(()=>{
  //   console.log('effect 更新')
  // },[num, num2])
  console.log('render 更新', num3, num4)
  
  const dom = <div id='dom'>
    <button onClick={()=>{
      setTimeout(()=>{
        setNum(++num)
        setNum2(++num2)
      },0)
    }}>加</button>
    <button onClick={()=>{
      setNum(--num)
      setNum2(--num2)
    }}>减</button>

    <button onClick={()=>{
      let n = 1000
      setNum(1000)
      startTransition(()=>{
        setNum2(30000)
      })
      startTransition2(()=>{
        setNum(30000)
      })
    }}>
      startTransition
    </button>
    <button onClick={()=>{
      setNum(10000)
      setNum2(30000)
    }}>
      无 startTransition
    </button>
    <button onClick={()=>{
      console.log('1')
      setNum4(++num4)
      console.log(num4, num4)
      ReactDOM.flushSync(()=>{
        console.log('2')
        setNum3(++num3)
        ReactDOM.flushSync(()=>{
          console.log('3')
          setNum4(++num4)
        })
      })
      
      console.log('4')
    }}> num 3 </button>
    <button id="btn">
      原生按钮
    </button>

    <div>
      num:{num} <br />
      num2:{num2} <br />
      deferNum:{deferNum}
    </div>
    
    <div>{isPending?'正在渲染':'渲染完成'}</div>
    <div style={{display:'flex', flexWrap:'wrap'}}>
      {Array.from({length: num}).map(()=><div style={{width:2, height:2,background:'blue'}}></div>)}
      {Array.from({length: num2}).map(()=><div style={{width:2, height:2,background:'red'}}></div>)}
      {Array.from({length: deferNum}).map(()=><div style={{width:2, height:2,background:'yellow'}}></div>)}
    </div>
  </div>
  return dom
}