 'use client'
import { useEffect, useRef, useState } from 'react';

import styles from './sobre.module.css';
import { createPool, Pool } from 'mysql2';
 

export default function SobrePage() {
 
   
  var lista = [ "red" , "blue" , "green"  ]
  var [color,setColor] = useState("red")

  return (
  <>
    <section className="container main-content">
      <div  >
        <h1 >Sobre Nós</h1>       
        <p>Esta é a página de sobre da nossa aplicação.</p>
        
      </div>      
        
 
    </section>
  </>

  );
}