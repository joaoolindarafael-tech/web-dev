'use client'

import { useEffect } from "react"
import "./portifolio.css"

export default function portfolioPage() {

  useEffect(() => {
    document.title = "PORTFÓLIO | SUA EMPRESA"
  }, [])

  const projetos = [
    {
      titulo: "Sistema de Faturação",
      descricao: "Sistema completo para gestão de vendas, relatórios e controlo financeiro.",
      imagem: "portfolio/software-de-gestao.jpg",
      tecnologia: "Next.js • Prisma • MySQL"
    },
    {
      titulo: "Plataforma Educacional",
      descricao: "Sistema de gestão escolar com controlo de notas e relatórios académicos.",
      imagem: "/portfolio/plataforma-educacional.jpg",
      tecnologia: "React • Node • PostgreSQL"
    },
    {
      titulo: "Dashboard Empresarial",
      descricao: "Painel administrativo com indicadores financeiros e gráficos em tempo real.",
      imagem: "/portfolio/dashboard.jpg",
      tecnologia: "Next.js • Chart.js"
    },
    {
      titulo: "Aplicação Mobile de Estoque",
      descricao: "App para controlo de inventário com sincronização em tempo real.",
      imagem: "/portfolio/app.avif",
      tecnologia: "React Native • API REST"
    }
  ]

  return (
    <section className="container main-content">
      <h2 className="portfolio-title">PORTFÓLIO</h2>

      <div className="portfolio-grid">
        {projetos.map((projeto, index) => (
          <div key={index} className="portfolio-card">
            <img src={projeto.imagem} alt={projeto.titulo} />
            <div className="portfolio-body">
              <h4>{projeto.titulo}</h4>
              <p>{projeto.descricao}</p>
              <span className="portfolio-tech">{projeto.tecnologia}</span>
              <button className="btn-primary">Ver Detalhes</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}