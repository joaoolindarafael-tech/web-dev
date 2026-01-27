"use client";

import Link from "next/link";
import { useRef } from "react";
import "./Header.module.css";

export default function Header() {
  const menuToggle = useRef<HTMLButtonElement | null>(null);
  const closeMenu = useRef<HTMLButtonElement | null>(null);
  const navMobile = useRef<HTMLElement | null>(null);

  function menuToggling() {
    if (!navMobile.current) return;
    navMobile.current.classList.toggle("active");
  }

  return (
    <div>
      <header className="header">
        {/*<div className="brilho"></div>*/}

        <div className="container header-content">
          <Link href="/" className="logo flex">
            &nbsp;
            <img
              className="mr-2"
              src="./logo.jpg"
              alt="Logo"
              width={40}
            />
            <strong>INFOJOR</strong>
          </Link>

          {/* Menu Desktop */}
          <nav className="nav-desktop">
            <Link href="/">Início</Link>
            <Link href="/sobre">Sobre Nós</Link>
            <Link href="/servicos">Serviços</Link>
            <Link href="/products">Portfólio</Link>
            <Link href="#contatos">Contacto</Link>
          </nav>

          <button
            className="menu-toggle"
            ref={menuToggle}
            onClick={menuToggling}
          >
            <img
              src="./align-right-icon-new.webp"
              alt="Menu"
              width={40}
              height={40}
            />
          </button>
        </div>
      </header>

      {/* Menu Mobile */}
      <nav
        className="nav-mobile"
        ref={navMobile}
        id="navMobile"
        onClick={menuToggling}
      >
        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <button
            className="close-menu activa"
            ref={closeMenu}
            onClick={menuToggling}
          >
            ×
          </button>

          <Link href="/" onClick={menuToggling}>Início</Link>
          <Link href="/sobre" onClick={menuToggling}>Sobre Nós</Link>
          <Link href="/servicos" onClick={menuToggling}>Serviços</Link>
          <Link href="/products" onClick={menuToggling}>Portfólio</Link>
          <Link href="#contatos" onClick={menuToggling}>Contacto</Link>
        </div>
      </nav>
    </div>
  );
}
