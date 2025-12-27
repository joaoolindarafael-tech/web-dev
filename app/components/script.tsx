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