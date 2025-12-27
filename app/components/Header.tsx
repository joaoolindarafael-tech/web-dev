"use client";
import Link from 'next/link';
import   "./Header.module.css";
import {   useRef  } from 'react';
import Banner from './Banner';
import assert from 'assert';
import { Asset } from 'next/font/google';
 
     
 
export default function Header(){
         
        const menuToggle = useRef(null);
        const closeMenu = useRef(null);
        const navMobile = useRef(null);

        function menuToggling( ){ 
            navMobile.current.classList.toggle("active") 
        }   



    return (
    <div>
       <header className="header">
            <div className="brilho"   >
               
            </div>
            <div className="container header-content ">
                 <Link href="/" className="logo flex " >&nbsp;<img className='mr-2' src={"./logo.jpg"} alt="next.svg" width={40}   color='#fff' /><strong>INFOJOR</strong></Link>

                 {/* <!-- Menu Desktop --> */}
                <nav className="nav-desktop">
                    <Link href="/">Início</Link>
                    <Link href="/sobre"  >Sobre Nós</Link>
                    <Link href="/servicos" >Serviços</Link>
                    <Link href="/products" >Portfólio</Link>
                    <Link href="#contatos" >Contacto</Link>
                </nav>

                <button className="menu-toggle" ref={menuToggle} onClick={menuToggling}  ><img src="./align-right-icon-new.webp" alt="" width={40} height={40} /></button>
            </div>
        </header>

        {/* <!-- Menu Mobile --> */}
        <nav  className="nav-mobile" ref={navMobile} id="navMobile" onClick={ menuToggling } >
            <div onClick={(event)=>{ event.stopPropagation()   }}  >
                <button className="close-menu activa"  ref={closeMenu} onClick={menuToggling}  >×</button>
                    <Link href="/" onClick={menuToggling}>Início</Link>
                    <Link href="/sobre" onClick={menuToggling}>Sobre Nós</Link>
                    <Link href="/servicos" onClick={menuToggling}>Serviços</Link>
                    <Link href="/products" onClick={menuToggling}>Portfólio</Link>
                    <Link href="#contatos" onClick={menuToggling}>Contacto</Link>
            </div>
        </nav>
        
    </div>
    )
}