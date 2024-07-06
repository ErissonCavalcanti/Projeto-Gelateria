import Logo from "/public/logo.png";
import Image from "next/image";
import estilos from "./Rodape.module.css";

export default function Rodape() {
  return (
    <footer>
      <section className={estilos.containerContato}>
        <div className={estilos.largura}>
          <Image className={estilos.imagemFooter} src={Logo}></Image>
          <div className={estilos.containeresContato}>
            <h3>ENDEREÇO</h3>
            <p>
              Av. Bernardino de Campos, 98 <br />
              São Paulo, SP 12345-678
            </p>
          </div>
          <div className={estilos.containeresContato}>
            <h3>CONTATO</h3>
            <p>
              info@meusite.com <br />
              Tel: (11) 3456-7890
            </p>
          </div>
          <div className={estilos.containeresContato}>
            <h3>HORÁRIOS</h3>
            <p>ABERTO TODOS OS DIAS 10:00 - 22:00</p>
          </div>
        </div>
      </section>
      <div className={estilos.containerAutoral}>
        <p>Gelateria. Orgulhosamente Desenvolvido por Erisson Cavalcanti</p>
      </div>
    </footer>
  );
}
