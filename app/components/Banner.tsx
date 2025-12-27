import { url } from "inspector";
import { useEffect } from "react";

export default function Banner(sliderType){
    
    useEffect(() => {
    const track = document.querySelector(".carousel-track");
    if (!track) return;

    const slides = track.children;
    const totalSlides = slides.length;

    let currentIndex = 0;
    const intervalTime = 4000; // tempo entre slides (ms)

    const goToSlide = (index) => {
        track.style.transform = `translateX(-${index * 100}%)`;
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    };

    const intervalId = setInterval(nextSlide, intervalTime);

    // cleanup obrigatório no React
    return () => clearInterval(intervalId);
}, []);


    return (
        <>
        {/*   =======================
              SESSÃO 1 – CARROSSEL
          ========================  */}
 
          <section className="carousel">
              <div className="carousel-track" style={{background:"#000",zIndex:1000}}>
                  <div className="slide active" style={{background:"url('./slider/cursos.webp')  center center "}}>
                      <h2> Soluções Tecnológicas Modernas </h2>
                      <p>Transformamos ideias em soluções digitais eficientes.</p>
                  </div>
                  <div className="slide" style={{background:"url('./slider/clientes.webp') cover"}}>
                      <h2> Segurança e Inovação </h2>
                      <p>Protegemos os seus dados com tecnologias atuais.</p>
                  </div>
                  <div className="slide" style={{background:"url('./slider/profissionais.webp') cover"}} >
                      <h2> Educação e Tecnologia  </h2>
                      <p>Formação tecnológica adaptada ao futuro.</p>
                  </div>
              </div>
              <div>
                <button type="button"></button>
              </div>
              
          </section>
        </>
    )
}