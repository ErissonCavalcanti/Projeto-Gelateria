import Image from "next/image";
import estilos from "@/app/Sobre/sobre.module.css";
import bannerSobre from "../../../public/banner-sobre.png";
import sobreImage from "../../../public/sobre-image.jpg";
import imgSorveteria from "../../../public/sorveteria.jpg";

export default function Sobre() {
  return (
    <main>
      <div className={estilos.containerBanner}>
        <Image className={estilos.imgBanner} src={bannerSobre}></Image>
        <h1>A Gelateria</h1>
      </div>

      <div className={estilos.containerSobre}>
        <div className={estilos.largura}>
          <h2>Sobre Nós</h2>
          <h3> Nós simplesmente amamos sorvete!</h3>
          <p>
            Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
            sorvete produzido. Fazemos o melhor sorvete para os nossos clientes
            e gostamos de receber elogios. Estamos operando desde 2009 com as
            melhores matérias-primas para a produção final do sorvete. Vendemos
            tanto para varejo como para atacado. <br />
            <br /> Nossos clientes podem comprar os nossos sorvetes e degustar
            na nossa loja ou levar para sua residência e aproveitar junto com a
            família. Também vendemos para estabelecimentos e criamos eventos
            como festa de aniversário, formaturas e eventos empresariais. Para
            contratar os nossos serviços, basta entrar em contato conosco.
            Iremos proporcionar o melhor atendimento e os melhores produtos para
            você fazer a sua festa mais saborosa, com o melhor sorvete da
            cidade.
          </p>
        </div>
      </div>

      <div className={estilos.containerImagem}>
        <Image className={estilos.img} src={sobreImage}></Image>
        <Image className={estilos.img} src={imgSorveteria}></Image>
      </div>
    </main>
  );
}
