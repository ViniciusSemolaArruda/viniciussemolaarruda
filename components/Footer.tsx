"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../theme/ThemeProvider";

const scrambleChars =
  "!@#$%¨&*()_+=-{}[]<>?/|ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

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

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={`relative mt-20 border-t backdrop-blur-xl transition-all duration-300 ${
        isDark
          ? "bg-[#07070c]/85 border-white/10 text-white"
          : "bg-white/75 border-black/10 text-zinc-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
            <span
              className={`uppercase font-black transition-all ${
                isDark ? "text-white" : "text-zinc-950"
              }`}
              style={{
                fontFamily: "'Orbitron', sans-serif",
                textShadow: isDark
                  ? "0 0 18px rgba(56,189,248,0.22)"
                  : "0 0 10px rgba(2,132,199,0.12)",
              }}
            >
              <span className="block sm:hidden text-[18px] tracking-[0.1em] whitespace-nowrap min-w-[190px]">
                <ScrambleLogo text="Vinícius Arruda" />
              </span>

              <span className="hidden sm:block text-[20px] tracking-[0.22em] whitespace-nowrap min-w-[390px]">
                <ScrambleLogo text="Vinícius Sêmola Arruda" />
              </span>
            </span>

            <p
              className={`text-sm ${
                isDark ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              Desenvolvedor Web & Mobile
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5521999167556"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-105 ${
                isDark
                  ? "bg-white/5 border-white/10 hover:bg-green-500/20"
                  : "bg-black/5 border-black/10 hover:bg-green-500/15"
              }`}
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-green-500" size={18} />
            </a>

            <a
              href="https://github.com/ViniciusSemolaArruda"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-105 ${
                isDark
                  ? "bg-white/5 border-white/10 hover:bg-white/10"
                  : "bg-black/5 border-black/10 hover:bg-black/10"
              }`}
              aria-label="GitHub"
            >
              <FaGithub
                className={isDark ? "text-white" : "text-zinc-900"}
                size={18}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/vinicius-arruda-936721224"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-105 ${
                isDark
                  ? "bg-white/5 border-white/10 hover:bg-sky-500/20"
                  : "bg-black/5 border-black/10 hover:bg-sky-500/15"
              }`}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-sky-500" size={17} />
            </a>
          </div>
        </div>

        <div
          className={`mt-8 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-3 ${
            isDark ? "border-white/10" : "border-black/10"
          }`}
        >
          <span
            className={`text-sm text-center md:text-left ${
              isDark ? "text-zinc-400" : "text-zinc-500"
            }`}
          >
            © 2026 Vinícius Sêmola Arruda. Todos os direitos reservados.
          </span>

          <span
            className={`font-mono text-xs text-center ${
              isDark ? "text-zinc-400" : "text-zinc-500"
            }`}
          >
            Crafted with <span className="text-fuchsia-500">Next.js</span> +{" "}
            <span className="text-sky-500">Tailwind</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;