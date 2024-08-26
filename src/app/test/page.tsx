'use client';
import React,{useContext} from 'react'
import { countContext } from '../../components/Context';

const Test = () => {
    const javed= useContext(countContext)
  return (
    <div>
      {javed.count}
    </div>
  )
}

export default Test
