/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Rocket, Users } from "lucide-react";

const qualities = [
  "Foco em soluções modernas e bem apresentadas",
  "Disciplina para transformar ideias em projetos reais",
  "Experiência com sites, sistemas e aplicativos",
  "Atenção ao design, responsividade e experiência do usuário",
];

export function SobreMim() {
  return (
    <section id="sobre-mim" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="aurora-blob bg-emerald-500" style={{ width: 360, height: 360, top: "10%", right: "-10%" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/30 via-fuchsia-500/30 to-emerald-500/30 blur-3xl rounded-[2rem]" />

            <div className="relative glass rounded-[2rem] p-3 rotate-[-2deg] hover-3d">
              <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-sky-400/20 via-fuchsia-500/20 to-emerald-400/20 grid place-items-center">
                <img
                  src="/imagem.png"
                  alt="Foto de Vinícius Arruda"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 glass rounded-2xl px-5 py-4 glow-green">
                <div className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-xs text-muted-foreground">Foco</p>
                    <p className="text-sm font-bold">Evolução constante</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
            // quem sou eu
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tighter">
            Mais do que código,
            <br />
            <span className="gradient-text">eu crio soluções.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Sou Vinícius Arruda, desenvolvedor focado em transformar ideias em sites, sistemas e aplicativos modernos. Gosto de unir tecnologia, design e estratégia para criar projetos que sejam bonitos, funcionais e fáceis de usar. Sempre que faz sentido para o projeto, utilizo ferramentas de inteligência artificial como apoio ao desenvolvimento, prototipação e otimização de processos, permitindo maior agilidade na entrega sem abrir mão da análise técnica, personalização e qualidade do resultado final.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-5 hover-3d">
              <Code2 className="w-6 h-6 text-sky-400 mb-4" />
              <h3 className="font-bold">Programação na prática</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Construo projetos reais com React, Next.js, React Native,
                banco de dados e integrações.
              </p>
            </div>

            <div className="glass rounded-2xl p-5 hover-3d">
              <Users className="w-6 h-6 text-fuchsia-400 mb-4" />
              <h3 className="font-bold">Visão de usuário</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Penso no visual, na experiência e na facilidade de uso em cada
                tela do projeto.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {qualities.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-muted-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}