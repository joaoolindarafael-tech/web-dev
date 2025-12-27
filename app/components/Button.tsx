'use client'
import {useEffect, useRef} from "react";
 

export   function Button({ name , cor, onClick, estilo }){
 
    return(
        <button style={ estilo  }   className={"rounded-full px-8  bg-"+cor+"-600   text-white  rounded  hover:bg-"+cor+"-400     transition"} onClick={onClick} >
            {name}
        </button>
    )
}
export default Button