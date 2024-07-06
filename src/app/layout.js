import Topo from "@/app/componentes/Topo";
import Rodape from "@/app/componentes/Rodape";
import "./globals.css";
export const metadata = {
  title: "Minha Sorveteria",
  description: "Sorveteria feita em React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
