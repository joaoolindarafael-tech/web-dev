 'use client'
import { useEffect, useRef, useState } from 'react';

import './about-page.css';
import { createPool, Pool } from 'mysql2';
 

export default function SobrePage() {
 
   
  var lista = [ "red" , "blue" , "green"  ]
  var [color,setColor] = useState("red")    
 
 
  
  return (
  <>
       {/* <!-- ======================= SESSÃO 1 – APRESENTAÇÃO ======================== --> */}
              
          <section className='about-section'     >
                <div className="container  " >
                    <div className='about-description' >
                        <h2  ><strong>SOBRE NÓS</strong></h2>
                        <p>
                            Actuamos fortemente na área TI oferecendo soluções em tecnologia,
                            desenvolvimento de sistemas, redes de computadores e segurança digital.
                            Trabalhamos com foco na inovação, eficiência e qualidade.
                        </p>
                        <br />
                        <p>
                            Actuamos fortemente na área TI oferecendo soluções em tecnologia,
                            desenvolvimento de sistemas, redes de computadores e segurança digital.
                            Trabalhamos com foco na inovação, eficiência e qualidade.
                        </p>
                    </div>
                   
                </div>
          </section>


                 {/* <!-- ======================= SESSÃO 2 – OBJETIVO ======================== --> */}
              
          <section className='objective-section'     >
                <div className="container  " >
                    <div className='objective-description' >
                        <h2  ><strong>OBJECTIVOS</strong></h2>
                            <div className="card-grid">

                                <div className="card">
                                     
                                    <div className="card-body">                        
                                        <h4><strong>MISSÃO--</strong></h4>
                                        <br />
                                        <p>Oferecer soluções tecnológicas e educacionais de qualidade, promovendo a inovação, a segurança digital e o desenvolvimento de competências, com foco na eficiência, na ética e na criação de valor para clientes, parceiros e a comunidade.</p>                
                                    </div>
                                </div>
                            
                                <div className="card">
                                     
                                    <div className="card-body  ">
                                                                 
                                        <h4><strong>--VISÃO--</strong></h4>
                                        <br />
                                        <p>Ser uma referência em tecnologia da informação e educação digital, reconhecida pela excelência dos serviços prestados, pela inovação contínua e pelo impacto positivo no crescimento sustentável de organizações e pessoas.</p>                
                                    </div>
                                </div>
                                        
                                <div className="card">
                                     
                                    <div className="card-body">                        
                                        <h4><strong>--VALORES--</strong></h4>
                                        <br />
                                  
                                        <p  > <strong>Inovação:</strong> buscar constantemente novas soluções e melhorias tecnológicas.</p>

                                        <p  ><strong>Qualidade:</strong> entregar serviços e soluções com alto padrão técnico e profissional.</p>

                                                    
                                    </div>
                                </div>
                                </div>
                    </div>
                   
                </div>
          </section>
 

  </>

  );
}