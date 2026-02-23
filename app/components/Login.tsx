  import "../cadastro/cadastro.css"
export default function Login(){
   
  return (
    <>
    <div className="register-box">
       <h2><strong>CRIAR CONTA</strong>  </h2>
      <form action="login" className="register-form">
        <input type="email" name="" id="" placeholder="Email ou Telefone" />
        <input type="password" name="" id="" placeholder="Senha"/>
        <input type="button" value="Entrar" className="btn-primary"/>
      </form>
    </div>
     
    </>
  )
  
}
