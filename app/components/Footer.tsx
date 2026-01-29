import Link from "next/link"
export default function Rodape(){
    
    return (
 
    //ÁRE DO CABEÇALHO DO SITE
    <footer className="footer">
         
            <div className="container ">
 
                <div className="mapa-do-site">
                    <h3><strong><Link href={"./"}>INFOJOR</Link></strong></h3>
                           
                    <ul> 
                         <li><Link  href={"./"}>Ouse Inovar</Link></li>
                       
                    </ul> 
                </div>
                <div className="mapa-de-servicos">         
                    <h3><strong>Mapa do site</strong></h3>
                    <br />                    
                    <ul>
                        <li><Link  href={"./"}>Home</Link></li>
                        <li><Link href={"./sobre"}>Quem somos</Link></li>
                        <li><Link href={"./servicos"}>Serviços</Link></li>
                        <li><Link href={"./#contatos"}>Contactos</Link></li>
                    </ul> 
                </div>

                 <div className="redes-sociais">         
                    <h3><strong>Redes Sociais</strong></h3>
                    <br /> 
                    <ul>
                        <li><Link  href={"./#facebook"}>Facebook</Link></li>
                        <li><Link href={"./#instagram"}>Instagram</Link></li>
                        <li><Link href={"./#whatsapp"}>Whatsapp</Link></li>
                        <li><Link href={"./#twitter"}>Twiter</Link></li>
                    </ul> 
                </div>

                <div className="contactos">         
                    <h3><strong>Contactos</strong></h3>
                    <br />
                    <ul>
                        <li><Link  href={"./"}>+244 930 804 036</Link></li>
                        <li><Link href={"./sobre"}>+244 954 416 357</Link></li>                         
                    </ul> 
                </div>

            </div>
            <div className="container">
                <div className="direitos"> 
                    <h4>INFOJOR © 2025 - Todos os direitos reservados</h4>
                </div>
            </div>
    </footer>
    )
}