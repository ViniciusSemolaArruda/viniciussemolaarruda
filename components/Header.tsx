"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "../theme/ThemeProvider";

const links = [
  { id: "inicio", label: "Início" },
  { id: "sobre-mim", label: "Sobre Mim" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "habilidades", label: "Habilidades" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "sobre", label: "Serviços" },
  { id: "contato", label: "Contato" },
];

const scrambleChars = "!@#$%¨&*()_+=-{}[]<>?/|ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function ScrambleLogo({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let frame = 0;

    const randomChar = () =>
      scrambleChars[Math.floor(Math.random() * scrambleChars.length)];

    const interval = setInterval(() => {
      const currentIndex = Math.floor(frame / 4);

      const nextText = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";

          if (index < currentIndex) return char;

          if (index === currentIndex) return randomChar();

          return " ";
        })
        .join("");

      setDisplayText(nextText);

      frame += 1;

      if (currentIndex >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 55);

    return () => clearInterval(interval);
  }, [text]);

  return <>{displayText}</>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const go = (id: string) => {
    setOpen(false);

    const element = document.getElementById(id);

    if (!element) return;

    const headerOffset = 76;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[76px] backdrop-blur-2xl border-b transition-all duration-300 ${
        isDark
          ? "bg-[#07070c]/82 border-white/10"
          : "bg-white/82 border-black/10"
      }`}
    >
      <div className="w-full h-full px-4 sm:px-6 lg:px-8 2xl:px-12 grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <button
  onClick={() => go("inicio")}
  className="shrink-0 flex items-center w-[190px] sm:w-[210px] xl:w-[390px]"
  aria-label="Ir para o início"
>
          <div className="relative">
            <div className="absolute -left-10 -top-6 w-28 h-16 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -right-6 -bottom-4 w-24 h-16 rounded-full bg-fuchsia-500/20 blur-3xl pointer-events-none" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-10 rounded-full bg-emerald-500/15 blur-2xl pointer-events-none" />

            <span
  className={`relative z-10 inline-block w-full uppercase font-black transition-all ${
    isDark ? "text-white" : "text-zinc-950"
  }`}
  style={{
    fontFamily: "'Orbitron', sans-serif",
    textShadow: isDark
      ? "0 0 18px rgba(56,189,248,0.22)"
      : "0 0 10px rgba(2,132,199,0.12)",
  }}
>
              <span className="block sm:hidden text-[17px] tracking-[0.1em] whitespace-nowrap">
                <ScrambleLogo text="Vinícius Arruda" />
              </span>

              <span className="hidden sm:block xl:hidden text-[18px] tracking-[0.14em] whitespace-nowrap">
                <ScrambleLogo text="Vinícius Arruda" />
              </span>

              <span className="hidden xl:block text-[20px] 2xl:text-[22px] tracking-[0.22em] whitespace-nowrap">
                <ScrambleLogo text="Vinícius Sêmola Arruda" />
              </span>
            </span>
          </div>
        </button>

        <nav className="hidden xl:flex items-center justify-center gap-1">
          {links.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`relative group px-3 py-2 text-sm font-medium transition-colors ${
                isDark
                  ? "text-zinc-400 hover:text-white"
                  : "text-zinc-500 hover:text-zinc-950"
              }`}
            >
              {item.label}

              <span className="absolute left-1/2 bottom-1 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 transition-all duration-300 group-hover:w-1/2" />
            </button>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 shrink-0">
          <ThemeToggle />

          <button
            onClick={() => setOpen((prev) => !prev)}
            className={`xl:hidden w-11 h-11 rounded-full flex items-center justify-center border transition-all ${
              isDark
                ? "bg-white/5 border-white/10 text-white hover:bg-white/10"
                : "bg-black/5 border-black/10 text-zinc-900 hover:bg-black/10"
            }`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className={`xl:hidden fixed top-[76px] left-0 right-0 max-h-[calc(100vh-76px)] overflow-y-auto backdrop-blur-2xl border-b ${
            isDark
              ? "bg-[#07070c]/96 border-white/10"
              : "bg-white/96 border-black/10"
          }`}
        >
          <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {links.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`text-left px-4 py-4 rounded-2xl text-base font-semibold transition-all ${
                  isDark
                    ? "text-white bg-white/[0.03] hover:bg-white/10"
                    : "text-zinc-900 bg-black/[0.03] hover:bg-black/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}