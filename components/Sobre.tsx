/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { motion } from "framer-motion";
import { Database, Globe2, Smartphone, type LucideIcon } from "lucide-react";

type Item = {
  icon: LucideIcon;
  title: string;
  desc: string;
  accent: string;
  glow: string;
  color: string;
};

const items: Item[] = [
  {
    icon: Globe2,
    title: "Desenvolvimento Web",
    desc: "Sites institucionais, landing pages e sistemas web responsivos com React, Next.js e TypeScript.",
    accent: "from-sky-400/80 to-sky-500/40",
    glow: "glow-blue",
    color: "text-sky-400",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    desc: "Apps iOS e Android em React Native com Expo, integrados e preparados para escalar.",
    accent: "from-fuchsia-400/80 to-fuchsia-500/40",
    glow: "glow-purple",
    color: "text-fuchsia-400",
  },
  {
    icon: Database,
    title: "Sistemas com Banco de Dados",
    desc: "APIs, autenticação, painéis administrativos e modelagem de dados com Prisma, PostgreSQL e MySQL.",
    accent: "from-emerald-400/80 to-emerald-500/40",
    glow: "glow-green",
    color: "text-emerald-400",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="relative py-16 lg:py-20 overflow-hidden">
      <div
        className="aurora-blob bg-emerald-500"
        style={{ width: 360, height: 360, top: "8%", right: "-12%" }}
      />

      <div
        className="aurora-blob bg-sky-500"
        style={{ width: 320, height: 320, bottom: "-14%", left: "-10%" }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="w-full max-w-[1500px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-[0.78fr_1.22fr] gap-6 lg:gap-12 items-end mb-10"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
                // serviços
              </span>

              <h2 className="mt-4 font-black leading-[0.98] tracking-tighter">
                <span className="block text-[2.4rem] sm:text-[3.1rem] lg:text-[3.8rem] xl:text-[4.3rem]">
                  Soluções digitais
                  <br />
                  <span className="gradient-text">
                    modernas e funcionais.
                  </span>
                </span>
              </h2>
            </div>

            <p className="max-w-4xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Desenvolvimento de sites, sistemas e aplicativos com visual
              moderno, boa performance, responsividade, banco de dados,
              autenticação e estrutura preparada para projetos reais.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-5 xl:gap-6">
            {items.map((it, i) => {
              const Icon = it.icon;

              return (
                <motion.article
                  key={it.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.08,
                  }}
                  className="hover-3d glass rounded-[1.6rem] p-6 lg:p-7 group relative overflow-hidden min-h-[250px] flex flex-col justify-between"
                >
                  <div
                    className={`absolute -top-20 -right-16 w-52 h-52 rounded-full bg-gradient-to-br ${it.accent} opacity-25 blur-2xl group-hover:opacity-50 transition-opacity`}
                  />

                  <div className="relative">
                    <div
                      className={`w-13 h-13 rounded-2xl glass grid place-items-center mb-5 ${it.glow}`}
                    >
                      <Icon className={`w-6 h-6 ${it.color}`} />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                      {it.title}
                    </h3>
                  </div>

                  <p className="relative mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {it.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;