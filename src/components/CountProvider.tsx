"use client";
import React from 'react'
import { countContext } from './Context';
import {useState} from 'react'
const CountProvider = ({children}:{children:React.ReactNode}) => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <countContext.Provider value={{count, setCount}}>
      {children}
      </countContext.Provider>
    </div>
  )
}

export default CountProvider
