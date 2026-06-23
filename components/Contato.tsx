/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../theme/ThemeProvider";

const buttons = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    sub: "+55 21 99916-7556",
    href: "https://wa.me/5521999167556",
    Icon: FaWhatsapp,
    color: "#25D366",
    glow: "glow-green",
  },
  {
    id: "email",
    label: "E-mail",
    sub: "vinicius.semola@gmail.com",
    href: "mailto:vinicius.semola@gmail.com",
    Icon: Mail,
    color: "#38BDF8",
    glow: "glow-blue",
  },
  {
    id: "github",
    label: "GitHub",
    sub: "@ViniciusSemolaArruda",
    href: "https://github.com/ViniciusSemolaArruda",
    Icon: FaGithub,
    color: "auto",
    glow: "",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    sub: "Vinícius Arruda",
    href: "https://www.linkedin.com/in/vinicius-arruda-936721224",
    Icon: FaLinkedinIn,
    color: "#0A66C2",
    glow: "glow-blue",
  },
];

export function Contato() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="contato" className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="aurora-blob bg-sky-500"
        style={{ width: 420, height: 420, top: "-10%", left: "20%" }}
      />

      <div
        className="aurora-blob bg-fuchsia-500"
        style={{ width: 380, height: 380, bottom: "-20%", right: "10%" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400">
          // contato
        </span>

        <h2 className="mt-5 text-4xl sm:text-6xl font-black tracking-tighter">
          Vamos criar seu
          <br />
          <span className="gradient-text">próximo projeto?</span>
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-muted-foreground">
          Estou disponível para colaborações, freelas e oportunidades. Escolha
          o melhor canal para começarmos a conversar.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {buttons.map((b, i) => {
            const Icon = b.Icon;

            const iconColor =
              b.color === "auto" ? (isDark ? "#FFFFFF" : "#18181B") : b.color;

            return (
              <motion.a
                key={b.id}
                href={b.href}
                target={b.id === "email" ? undefined : "_blank"}
                rel={b.id === "email" ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass hover-3d rounded-2xl p-6 flex items-center gap-5 text-left group ${b.glow}`}
              >
                <div
                  className="w-14 h-14 rounded-xl grid place-items-center shrink-0"
                  style={{
                    background:
                      b.color === "auto"
                        ? isDark
                          ? "rgba(255,255,255,0.12)"
                          : "rgba(0,0,0,0.08)"
                        : `${b.color}1f`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: iconColor }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-base font-bold">{b.label}</div>

                  <div className="text-xs text-muted-foreground truncate">
                    {b.sub}
                  </div>
                </div>

                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contato;