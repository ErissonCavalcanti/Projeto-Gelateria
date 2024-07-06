import estilos from "./page.module.css";
import Image from "next/image";
import banner from "/public/banner-home.png";
import bannerSabores from "/public/banner-sabores.jpg";
import eventosImage from "/public/eventos-image.jpg";
import sobreImage from "/public/sobre-image.jpg";

export default function Home() {
  return (
    <main className={estilos.main}>
      <div>
        <section className={estilos.secao1}>
          <Image className={estilos.imgBanner} src={banner} alt="Banner"></Image>
          <h1 className={estilos.titulo}>Sorvete Artesanal</h1>
        </section>

        <section className={estilos.secao2}>
          <div className={estilos.containerLargura}>
            <div className={estilos.containerImg}>
              <Image
                className={estilos.img}
                src={bannerSabores}
                alt="banner-sabores"
              ></Image>
            </div>
            <div className={estilos.containerTextos}>
              <h2>NOSSOS SABORES</h2>
              <h3>Novos e Deliciosos!</h3>
              <p>
                Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
                gelateria todos os nossos produtos são naturais, à base de
                frutas e sem nenhum conservante! Também temos opções sem lactose
                e sem açúcar. Venha conhecer e perceber que tem como o sorvete
                ser delicioso e saudável ao mesmo tempo!
              </p>
            </div>
          </div>
          <div className={estilos.containerLargura}>
            <div className={estilos.containerTextos}>
              <h2>NOSSOS EVENTOS</h2>
              <h3>Delicias com sorvete!</h3>
              <p>
                Mais do que uma sorveteria, uma extensão da sua casa! Estamos
                aqui prontinhos para te atender e oferecer os melhores eventos
                com os melhores sorvete da sua vida! Venha nos conhecer e passar
                um tempo aqui com a gente.
              </p>
            </div>
            <div className={estilos.containerImg}>
              <Image className={estilos.img} src={eventosImage}></Image>
            </div>
          </div>

          <div className={estilos.containerLargura}>
            <div className={estilos.containerImg}>
              <Image className={estilos.img} src={sobreImage}></Image>
            </div>
            <div className={estilos.containerTextos}>
              <h2>SOBRE NÓS</h2>
              <h3>Alegria em cada casquinha!</h3>
              <p>
                Venha tomar o melhor sorvete da região aqui com a gente! Nós
                estamos há anos no mercado produzindo o que tem de melhor para o
                nosso cliente e você não pode ficar fora dessa. Venha nos fazer
                uma visita e aproveite o melhor atendimento e o melhor sorvete
                da cidade.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
