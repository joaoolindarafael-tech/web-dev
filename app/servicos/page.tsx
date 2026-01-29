'use client'
import { useEffect } from "react";
import Banner from "../components/Banner";
export const controle = () => { 
    return  {  name : "Desenvolvimento de App" , descricao: "Sistemas personalizados para geolocalização, monitoramento e controlo de estoque pelo celular." }
}
export default function servicosPage() {
  useEffect(()=>{
     document.title="BEM-VINDO | HOME"
  },[])
  
  return (<>
 
         <section className="services container">
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
                        <h4><strong>Desenvolvimento Mobile</strong></h4>
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
                      </div>
                    </div>                    
                 
              </div>
          </section>

  
  </>

  );
}