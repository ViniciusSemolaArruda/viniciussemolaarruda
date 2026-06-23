import { ThemeProvider } from "../theme/ThemeProvider";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Sobre } from "../components/Sobre";
import { Projetos } from "../components/Projetos";
import { Habilidades } from "../components/Habilidades";
import { Diferenciais } from "../components/Diferenciais";
import { Contato } from "../components/Contato";
import { Footer } from "../components/Footer";
import { SobreMim } from "../components/SobreMim";
import { Experiencia } from "../components/Experiencia";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        <div className="fixed inset-0 tech-grid pointer-events-none z-0" />

        <div className="relative z-10">
          <Header />
          <main>
  <Hero />
  <SobreMim />
  <Experiencia />
  <Projetos />
  <Habilidades />
  <Diferenciais />
  <Sobre />
  <Contato />
</main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}