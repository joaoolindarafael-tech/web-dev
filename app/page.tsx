
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
              <h2  >Quem Somos</h2>
              <p>
                  Atuamos na área TI oferecendo soluções em tecnologia,
                  desenvolvimento de sistemas, redes de computadores e segurança digital.
                  Trabalhamos com foco na inovação, eficiência e qualidade.
              </p>
          </section>
      {/* 
          <!-- =======================
              SESSÃO 3 – SERVIÇOS
          ======================== --> */}
          <section className="services container">
              <h2>Serviços Prestados</h2>

              <div className="services-grid">
                  <div className="service-card">
                      <h4>Desenvolvimento de Software e Implementação de Redes Estruturadas</h4>
                      <p>Sistemas personalizados para gestão, faturação e controlo.</p>
                  </div>

                  <div className="service-card">
                      <h4>Redes de Computadores</h4>
                      <div className="py-3"><p>Instalação, configuração e manutenção de redes locais.</p></div>

                  </div>

                  <div className="service-card">
                      <h4> { controle().name }</h4>
                      <p>{controle().descricao}</p>
                  </div>

                  <div className="service-card">
                      <h4>Assistência Técnica</h4>
                      <p>Manutenção e reparação de computadores e equipamentos.</p>
                  </div>
              </div>
          </section>

          {/* <!-- =======================
              SESSÃO 4 – CLIENTES & PARCEIROS
          ======================== --> */}
          <section className= "partners container main-content ">
              <h2>Clientes & Parceiros</h2>

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
              <h2>Notícias</h2>

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