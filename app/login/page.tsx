
"use client"
import Login from "../components/Login";
import { useEffect } from "react";

 export default function loginPage(){

    useEffect(() => {
    document.title = "LOGIN | INFOJOR"
  }, [])
  
 return(
  <>
    <div className="container main-content">
      <h4>Seja bem vindo</h4>
      <Login/>
    </div>
  </>
 )

 
}