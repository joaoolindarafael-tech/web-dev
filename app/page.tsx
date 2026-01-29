
'use client'
import { use, useEffect, useState } from "react";
 
import Banner from "./components/Banner";
import { title } from "process";
import { metadata } from "./layout";
import Slider from "./components/Silder";

export const controle = () => { 
    return  {  name : "Desenvolvimento de App" , descricao: "Sistemas personalizados para geolocalização, monitoramento e controlo de estoque pelo celular." }
}

 
export default function Home() {

 useEffect(()=>{
    document.title="BEM-VINDO | HOME"
 },[])

const [btn , setBtn] = useState({})
 
  return (
      <> 

          <Slider  />
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
      {/* 
          <!-- =======================
              SESSÃO 3 – SERVIÇOS
          ======================== --> */
        }
         <section className="services container">
              <div className="molde-service">
                 
              </div>
              <h2>SERVIÇOS</h2>

                <div className="card-grid">
                  
                    <div className="card">
                      <img  alt="" src={"/dev.jpg"} />
                      <div className="card-body">
                        
                        <h4><strong>Desenvolvimento Web</strong></h4>
                        <br />
                        <p>Sistemas personalizados para gestão, faturação e controlo.</p>                
                      </div>
                    </div>

                    <div className="card">
                      <img  alt="" src={"./slider/profissionais.webp"} />
                      <div className="card-body">                        
                        <h4><strong>Marketig Digital</strong></h4>
                        <br />
                        <p>Sistemas personalizados para gestão, faturação e controlo.</p>                
                      </div>
                    </div>

                    <div className="card">
                      <img  alt="" src={"./slider/clientes.webp"} />
                      <div className="card-body">                        
                        <h4><strong>Auditorias</strong></h4>
                        <br />
                        <p>Sistemas personalizados para gestão, faturação e controlo.</p>                
                      </div>
                    </div>

                    <div className="card">
                      <img  alt="" src={"./slider/cursos.webp"} />
                      <div className="card-body">                        
                        <h4><strong>Resolução de Bugs online </strong></h4>
                        <br />
                        <p>Sistemas personalizados para gestão, faturação e controlo.</p>                
                        <div className="card-footer">
                        <button  className="btn bg-primary"  >
                            Soliciar orçamento
                        </button>
                        </div>
                      </div>
                    </div>                    
                 
              </div>
          </section>

          {/* <!-- =======================
              SESSÃO 4 – CLIENTES & PARCEIROS
          ======================== --> */}
          <section className= "partners container main-content ">
              <h2>CLIENTE & PARCEIROS</h2>

              <div className="partners-grid">
                  <div className="partner">Empresa Alpha</div>
                  <div className="partner">Tech Solutions</div>
                  <div className="partner">Grupo Digital</div>
                  <div className="partner">Inova Corp</div>
              </div>
          </section>

          {/* <!-- =======================
              SESSÃO 5 – NOTÍCIAS
          ======================== --> */}
          <section className="news container main-content">
              <h2>NOTICIAS</h2>

              <div className="news-grid">
                  <article className="news-card">
                      <h4>Novas Tendências em Segurança Digital</h4>
                      <p>A segurança da informação torna-se cada vez mais essencial...</p>
                     <span>10 Jan 2025</span> <hr />
                     <input type="button" value={" Ver mais... "}    />
                  </article>

                  <article className="news-card">
                      <h4>Importância das Redes nas Empresas</h4>
                      <p>As redes de computadores são a base da comunicação moderna...</p>
                      <span>05 Jan 2025</span> <hr />
                     <input type="button" value={" Ver mais... "}   />
                  </article>

                  <article className="news-card">
                      <h4>Educação Tecnológica em Crescimento</h4>
                      <p>O ensino da informática prepara jovens para o mercado...</p>
                      <span>02 Jan 2025</span> <hr />
                     <input type="button" value={" Ver mais... "}   /> 
                  </article>
              </div>
          </section>  
      </>
  );
}