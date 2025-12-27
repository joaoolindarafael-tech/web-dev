<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Layout Moderno Responsivo</title>

    <!-- CSS Global -->
    <link rel="stylesheet" href="css/global.css">
    <!-- CSS do Menu -->
    <link rel="stylesheet" href="css/menu.css">
    <!-- CSS do Rodapé -->
    <link rel="stylesheet" href="css/footer.css">
<link rel="stylesheet" href="css/home.css">
</head>
<body>

<header class="header">
    <div class="container header-content">
        <h1 class="logo">MinhaMarca</h1>

        <nav class="nav-desktop">
            <a href="#">Início</a>
            <a href="#">Serviços</a>
            <a href="#">Portfólio</a>
            <a href="#">Contacto</a>
        </nav>

        <button class="menu-toggle" id="menuToggle">☰</button>
    </div>
</header>

<!-- Menu Mobile -->
<nav class="nav-mobile" id="navMobile">
    <button class="close-menu" id="closeMenu">×</button>
    <a href="#">Início</a>
    <a href="#">Serviços</a>
    <a href="#">Portfólio</a>
    <a href="#">Contacto</a>
</nav>

<main class="container main-content">

    <!-- =======================
        SESSÃO 1 – CARROSSEL
    ======================== -->
    <section class="carousel">
        <div class="carousel-track">
            <div class="slide active">
                <h2>Soluções Tecnológicas Modernas</h2>
                <p>Transformamos ideias em soluções digitais eficientes.</p>
            </div>
            <div class="slide">
                <h2>Segurança e Inovação</h2>
                <p>Protegemos os seus dados com tecnologias atuais.</p>
            </div>
            <div class="slide">
                <h2>Educação e Tecnologia</h2>
                <p>Formação tecnológica adaptada ao futuro.</p>
            </div>
        </div>
    </section>

    <!-- =======================
        SESSÃO 2 – APRESENTAÇÃO
    ======================== -->
    <section class="about">
        <h2>Quem Somos</h2>
        <p>
            Atuamos na área da informática oferecendo soluções em tecnologia,
            desenvolvimento de sistemas, redes de computadores e segurança digital.
            Trabalhamos com foco na inovação, eficiência e qualidade.
        </p>
    </section>

    <!-- =======================
        SESSÃO 3 – SERVIÇOS
    ======================== -->
    <section class="services">
        <h2>Serviços Prestados</h2>

        <div class="services-grid">
            <div class="service-card">
                <h3>Desenvolvimento de Software</h3>
                <p>Sistemas personalizados para gestão, faturação e controlo.</p>
            </div>

            <div class="service-card">
                <h3>Redes de Computadores</h3>
                <p>Instalação, configuração e manutenção de redes locais.</p>
            </div>

            <div class="service-card">
                <h3>Segurança Informática</h3>
                <p>Proteção de sistemas, dados e infraestruturas digitais.</p>
            </div>

            <div class="service-card">
                <h3>Assistência Técnica</h3>
                <p>Manutenção e reparação de computadores e equipamentos.</p>
            </div>
        </div>
    </section>

    <!-- =======================
        SESSÃO 4 – CLIENTES & PARCEIROS
    ======================== -->
    <section class="partners">
        <h2>Clientes & Parceiros</h2>

        <div class="partners-grid">
            <div class="partner">Empresa Alpha</div>
            <div class="partner">Tech Solutions</div>
            <div class="partner">Grupo Digital</div>
            <div class="partner">Inova Corp</div>
        </div>
    </section>

    <!-- =======================
        SESSÃO 5 – NOTÍCIAS
    ======================== -->
    <section class="news">
        <h2>Notícias</h2>

        <div class="news-grid">
            <article class="news-card">
                <h3>Novas Tendências em Segurança Digital</h3>
                <p>A segurança da informação torna-se cada vez mais essencial...</p>
                <span>10 Jan 2025</span>
            </article>

            <article class="news-card">
                <h3>Importância das Redes nas Empresas</h3>
                <p>As redes de computadores são a base da comunicação moderna...</p>
                <span>05 Jan 2025</span>
            </article>

            <article class="news-card">
                <h3>Educação Tecnológica em Crescimento</h3>
                <p>O ensino da informática prepara jovens para o mercado...</p>
                <span>02 Jan 2025</span>
            </article>
        </div>
    </section>

</main>

<footer class="footer">
    <div class="container">
        <p>© 2025 - Todos os direitos reservados</p>
    </div>
</footer>

<script>
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navMobile = document.getElementById('navMobile');

    menuToggle.addEventListener('click', () => {
        navMobile.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        navMobile.classList.remove('active');
    });
</script>

</body>
</html>
