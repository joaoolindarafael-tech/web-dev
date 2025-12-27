import { useEffect, useRef } from "react";

export default function Banner() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current as HTMLDivElement | null;
    if (!track) return;

    const totalSlides = track.children.length;
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="carousel">
        <div
          className="carousel-track"
          ref={trackRef}
          style={{ background: "#000", zIndex: 1000 }}
        >
          <div
            className="slide active"
            style={{ background: "url('./slider/cursos.webp') center center" }}
          >
            <h2>Soluções Tecnológicas Modernas</h2>
            <p>Transformamos ideias em soluções digitais eficientes.</p>
          </div>

          <div
            className="slide"
            style={{ background: "url('./slider/clientes.webp') center / cover" }}
          >
            <h2>Segurança e Inovação</h2>
            <p>Protegemos os seus dados com tecnologias atuais.</p>
          </div>

          <div
            className="slide"
            style={{ background: "url('./slider/profissionais.webp') center / cover" }}
          >
            <h2>Educação e Tecnologia</h2>
            <p>Formação tecnológica adaptada ao futuro.</p>
          </div>
        </div>

        <div>
          <button type="button"></button>
        </div>
      </section>
    </>
  );
}
