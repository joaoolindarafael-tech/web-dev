 'use client'
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import styles from './sobre.module.css';
import { createPool, Pool } from 'mysql2';
 

export default function SobrePage() {
   document.title="SOBRE NÓS"
   
  var lista = [ "red" , "blue" , "green"  ]
  var [color,setColor] = useState("red")

  return (
  <>
    <section className="container main-content">
      <div  >
        <h1 >Sobre Nós</h1>       
        <p>Esta é a página de sobre da nossa aplicação.</p>
        <Button name="Entrar" cor="blue"   onClick={  ()=> { console.log("Azul acionado") }  } />
      </div>      
        
          <Button name= "Botão" estilo={{background:"green", cursor:"pointer"}}  cor={ "red"} onClick={  ()=> { console.log("Azul acionado") }  }    /> 
          <Button name= "Verde"  cor={color}   onClick={  ()=> {    setColor(lista[ Math.floor(Math.random()* lista.length) ])  }  } /> 
    
    
    </section>
  </>

  );
}