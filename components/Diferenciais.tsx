/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { motion } from "framer-motion";
import {
  Database,
  Globe,
  ImageUp,
  LayoutDashboard,
  Lock,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

type Item = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const items: Item[] = [
  {
    icon: Smartphone,
    title: "Design responsivo",
    desc: "Layouts que se adaptam a qualquer tela.",
  },
  {
    icon: Database,
    title: "Integração com banco de dados",
    desc: "Modelagem, queries e APIs performáticas.",
  },
  {
    icon: Lock,
    title: "Login e autenticação",
    desc: "JWT, OAuth e fluxos seguros prontos para produção.",
  },
  {
    icon: LayoutDashboard,
    title: "Painel administrativo",
    desc: "Controle total sobre conteúdo, usuários e métricas.",
  },
  {
    icon: ImageUp,
    title: "Upload de imagens",
    desc: "Cloudinary, S3 e otimização automática.",
  },
  {
    icon: Globe,
    title: "Publicação online",
    desc: "Deploy contínuo na Vercel, AWS e similares.",
  },
];

export function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="relative py-16 lg:py-20 overflow-hidden"
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="w-full max-w-[1500px] mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-12 items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
                // diferenciais
              </span>

              <h2 className="mt-4 font-black leading-[0.98] tracking-tighter">
                <span className="block text-[2.4rem] sm:text-[3.1rem] lg:text-[3.8rem] xl:text-[4.3rem]">
                  O que entrego em
                  <br />
                  <span className="gradient-text">cada projeto.</span>
                </span>
              </h2>
            </div>

            <p className="max-w-4xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Estrutura completa para tirar uma ideia do papel: visual moderno,
              responsividade, banco de dados, autenticação, painel
              administrativo, upload de imagens e publicação online.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-5">
            {items.map((it, i) => {
              const Icon = it.icon;

              return (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                  }}
                  className="glass rounded-2xl p-6 lg:p-7 group hover-3d relative overflow-hidden min-h-[190px] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl glass grid place-items-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg lg:text-xl font-bold">
                      {it.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {it.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Diferenciais;