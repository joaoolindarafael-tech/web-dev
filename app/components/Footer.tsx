import Link from "next/link"
export default function Rodape(){
    
    return (
 
    //ÁRE DO CABEÇALHO DO SITE
    <footer className="footer">
         
            <div className="container ">
 
                <div>         
                    <ul>
                        <li><Link  href={"./"}>Home</Link></li>
                        <li><Link href={"./sobre"}>Quem somos</Link></li>
                        <li><Link href={"./servicos"}>Serviços</Link></li>
                        <li><Link href={"./#contatos"}>Contactos</Link></li>
                    </ul> 
                </div>
                <div>
                    <p>INFOJOR © 2025 - Todos os direitos reservados</p>
                </div>
            </div>
        
    </footer>
    )
}