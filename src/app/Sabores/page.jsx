import Image from "next/image";
import bannerSabores from "/public/banner-sabores.jpg";
import estilos from "@/app/Sabores/sabores.module.css";
import saborOreo from "../../../public/sabor-oreo.png";
import saborPistache from "../../../public/sabor-pistache.png";
import saborCookies from "../../../public/sabor-cookies-avela.png";
import saborKiwi from "../../../public/sorbet-kiwi.png";
import saborMorango from "../../../public/sorbet-morango.png";
import saborLimao from "../../../public/sorbet-limao.png";

export default function Sabores() {
  return (
    <section>
      <div className={estilos.containerBanner}>
        <Image
          className={estilos.img}
          src={bannerSabores}
          alt="banner-sabores"
        ></Image>
        <h1>NOSSOS SABORES</h1>
      </div>
      <div className={estilos.containerSabores}>
        <h2>SABORES DE SORVETE</h2>

        <div className={estilos.largura}>
          <div className={estilos.containerSorvetes}>
            <Image className={estilos.imgSorvetes} src={saborOreo}></Image>
            <h4>Sorvete de Oreo</h4>
            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
          </div>
          <div className={estilos.containerSorvetes}>
            <Image className={estilos.imgSorvetes} src={saborPistache}></Image>
            <h4>Sorvete Pistache</h4>
            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
          </div>
          <div className={estilos.containerSorvetes}>
            <Image className={estilos.imgSorvetes} src={saborCookies}></Image>
            <h4>Sorvete Cookies e Avelã</h4>
            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
          </div>
          <div className={estilos.containerSorvetes}>
            <Image className={estilos.imgSorvetes} src={saborKiwi}></Image>
            <h4>Sorvete de Kiwi</h4>
            <p>
              Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
            </p>
          </div>
          <div className={estilos.containerSorvetes}>
            <Image className={estilos.imgSorvetes} src={saborMorango}></Image>
            <h4>Sorvete de Morango</h4>
            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
          </div>
          <div className={estilos.containerSorvetes}>
            <Image className={estilos.imgSorvetes} src={saborLimao}></Image>
            <h4>Sorvete de Limão</h4>
            <p>
              O incrivel sorvete gourmet de limão siciliano vai te encantar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
