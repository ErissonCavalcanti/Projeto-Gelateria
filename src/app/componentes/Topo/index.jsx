import Logo from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import estilos from "./Topo.module.css";

export default function Topo() {
  return (
    <header className={estilos.topo}>
      <div className={estilos.cabecalho}>
        <Image className={estilos.logo} src={Logo} alt="logo-sorveteria" />

        <nav className={estilos.nav}>
        <Link href="/">Home</Link>
          <Link href="/Sabores">Sabores</Link>
          <Link href="/Sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  );
}
