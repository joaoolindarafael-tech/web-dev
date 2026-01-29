 'use client'
import { useEffect, useRef, useState } from 'react';

import styles from './sobre.module.css';
import { createPool, Pool } from 'mysql2';
 

export default function SobrePage() {
 
   
  var lista = [ "red" , "blue" , "green"  ]
  var [color,setColor] = useState("red")

  return (
  <>
       {/* <!-- =======================
              SESSÃO 2 – APRESENTAÇÃO
          ======================== --> */}
          <section className="about container   main-content">
              <h2  >QUEM SOMOS</h2>
              <p>
                  Actuamos fortemente na área TI oferecendo soluções em tecnologia,
                  desenvolvimento de sistemas, redes de computadores e segurança digital.
                  Trabalhamos com foco na inovação, eficiência e qualidade.
              </p>
          </section>
  </>

  );
}