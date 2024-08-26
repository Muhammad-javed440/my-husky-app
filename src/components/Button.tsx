'use client';
import React from "react";

function Button(){
    return (
        
        <button className="button bg-blue-600 rounded-md py-2 px-2 mx-auto hover:text-white hover:bg-blue-800" onClick={()=> alert('i am a button')}>Click me!</button>
        
    )
}
export default Button;