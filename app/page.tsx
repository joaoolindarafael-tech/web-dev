
'use client'
import { use, useEffect, useState } from "react";
 
import Banner from "./components/Banner";
import { title } from "process";
import { metadata } from "./layout";
import Slider from "./components/Silder";
import { createPost, getPosts } from "./actions/posts/posts";
import { createUser } from "./actions/users/users";

export const controle = () => { 
    return  {  name : "Desenvolvimento de App" , descricao: "Sistemas personalizados para geolocalização, monitoramento e controlo de estoque pelo celular." }
}

 
export default function Home() {

    // only for testing purposes
useEffect(() => {

    const loadPosts = async() => {
const posts = await getPosts()

console.info("POSTS", posts)

    }

    loadPosts()

}, [])
    




// handlers

const handleCreateUser = async () => {
    
    try {
        const createUsers = await createUser({
            name: "Emanuel",
            email: "maquete2@test.com",
            password: "minhasenha0123"
        })

        console.log(createUsers)

    } catch (error) {
        console.error(error)
    }
}

const handleCreatePost = async () => {
    
    try {
        const createPosts = await createPost({
            title: "Emanuels posts",
            authorId:"ae4bc394-97e4-4cd3-9eee-4849fbc06877",
            content: `Post do user: 307982b2-1bfc-47f6-ba6d-9625d9b23f0f, aos ${Date.now()}
`
        })

        console.log(createPosts)

    } catch (error) {
        console.error(error)
    }
}


 useEffect(()=>{
    document.title="BEM-VINDO | INFOJOR"
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
                        <button 
                        onClick={handleCreateUser}
                        className="btn bg-primary"  >
                            Soliciar orçamento
                        </button>
                       
                        <button 
                        onClick={handleCreatePost}
                        className="btn bg-primary"  >
                            Criar Post
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