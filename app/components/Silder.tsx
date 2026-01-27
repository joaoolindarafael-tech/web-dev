import { useState } from "react";

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      src: "/slider/clientes.webp",
      title: "Primeiro Banner",
      description: "Legenda visível sobre a imagem"
    },
    {
      id: 2,
      src: "/slider/clientes.webp",
      title: "Segundo Banner",
      description: "Slider fluido e responsivo"
    },
    {
      id: 3,
      src: "/slider/clientes.webp",
      title: "Terceiro Banner",
      description: "70vh de altura no dispositivo"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="slide" key={slide.id}>
            <img src={slide.src} alt={slide.title} />

            <div className="caption">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-btn prev" onClick={prevSlide}>‹</button>
      <button className="slider-btn next" onClick={nextSlide}>›</button>

      <style jsx>{`
        .slider {
          width: 100%;
          height: 70vh; /* ALTURA DO BANNER */
          overflow: hidden;
          position: relative;
        }

        .slides {
          display: flex;
          height: 100%;
          transition: transform 0.4s ease-in-out;
        }

        .slide {
          min-width: 100%;
          height: 100%;
          position: relative;
        }

        /* IMAGEM 100% DEVICE */
        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6; /* ajuste da opacidade */
        }

        /* LEGENDA */
        .caption {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: #fff;
          padding: 20px;
        }

        .caption h2 {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          margin-bottom: 10px;
        }

        .caption p {
          font-size: clamp(1rem, 2vw, 1.2rem);
          max-width: 700px;
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          z-index: 10;
        }

        .prev {
          left: 15px;
        }

        .next {
          right: 15px;
        }
      `}</style>
    </div>
  );
}
