import React from 'react'
import {useState,useRef} from "react"
import PropTypes from 'prop-types';
Search.prototype={
    onSubmit:PropTypes.func,
};
Search.defaultProps={
    onSubmit:null,
};

export default function Search(props) {
    const{onSubmit}=props;
    const [search, setsearch] = useState("")
    const typingTimeoutRef = useRef(null)
 function handSeach (e){
     setsearch(e.target.value)
     if(!onSubmit) return;
     if(typingTimeoutRef.current){
         clearTimeout(typingTimeoutRef.current)
     }
     typingTimeoutRef.current=setTimeout(()=>{
        const formValue = {
            search:e.target.value,
        }
        onSubmit(formValue)

     },300)
   
 }
    return (
        <div>
            <input
            type="text"
            value={search}
            onChange={handSeach}
            />
          
        </div>
    )
}

