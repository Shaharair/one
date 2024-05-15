import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
let apidata = createContext()
import axios from 'axios';

const Context = ({children}) => {
    let [info,setInfo] = useState([])
    let getdata = ()=> axios.get("https://dummyjson.com/products").then((response)=>{
      setInfo(response.data.products);
    })
  
    useEffect(()=>{
        getdata()
    },[])
   
  return (
    <apidata.Provider value={info}>{children}</apidata.Provider>
  )
}

export  {Context,apidata}