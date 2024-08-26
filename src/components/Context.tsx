'use client';
import {createContext} from 'react';
interface count{
    [x:string]:any
}
export const countContext = createContext({} as count);

