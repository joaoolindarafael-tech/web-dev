'use client'

import { useState, useEffect } from "react"
import { createUser } from "../actions/users/users"
import "./cadastro.css"

export default function Cadastro() {

  //ESTADO INICIAL DO VALORES DO FOMULARIO
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })
  //ESTADO INICIAL DO LOADING E DO FEEDBACK
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  //DEFINIÇÂO DO TITULO DA PAGINA
  useEffect(() => {
    document.title = "CADASTRO | SUA EMPRESA"
  }, [])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  //EVENTO SUBMIT DO FORMULARIO
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      await createUser(form)

      setMessage("Usuário cadastrado com sucesso!")
      setForm({ name: "", email: "", password: "" })

    } catch (error) {
      console.error(error)
      setMessage("Erro ao cadastrar usuário.")
    }

    setLoading(false)
  }

  return (
    <section className="container main-content">
      <div className="register-box">
        <h2>CRIAR CONTA</h2>

        <form onSubmit={handleSubmit} className="register-form">

          <input
            type="text"
            name="name"
            placeholder="Nome completo"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>

          {message && <p className="form-message">{message}</p>}

        </form>
      </div>
    </section>
  )
}