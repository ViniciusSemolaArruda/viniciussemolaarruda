"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Typewriter } from "./Typewriter";

function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 3000,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;

    function animate(currentTime: number) {
      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(eased * to));

      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

const stats = [
  { to: 12, suffix: "+", label: "Projetos" },
  { to: 15, suffix: "+", label: "Tecnologias" },
  { to: 100, suffix: "%", label: "Responsivo" },
];

export function Hero() {
  const scrollTo = (id: string) => {
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
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-[96px] pb-12 overflow-hidden"
    >
      <div
        className="aurora-blob bg-fuchsia-500"
        style={{ width: 420, height: 420, top: -90, left: -140 }}
      />

      <div
        className="aurora-blob bg-sky-500"
        style={{ width: 390, height: 390, top: 100, right: -120 }}
      />

      <div
        className="aurora-blob bg-emerald-500"
        style={{ width: 330, height: 330, bottom: -110, left: "35%" }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="w-full max-w-[1450px] mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-8 xl:gap-12 2xl:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass mb-6 text-xs sm:text-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />

              <span className="text-muted-foreground whitespace-nowrap">
                Disponível para novos projetos
              </span>

              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            </div>

            <h1 className="font-black leading-[0.96] tracking-tighter">
              <span className="block text-[3rem] sm:text-[4rem] lg:text-[4.7rem] xl:text-[5.2rem]">
                Desenvolvedor
                <br />
                <span className="gradient-text">Web & Mobile</span>
              </span>
            </h1>

            <div className="mt-6 text-[1.4rem] sm:text-[1.75rem] lg:text-[2rem] font-semibold min-h-[48px] sm:min-h-[56px]">
              <Typewriter />
            </div>

            <p className="mt-5 max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Crio sites, sistemas e aplicativos modernos, responsivos e
              conectados a banco de dados — com performance, design e foco no
              usuário.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => scrollTo("projetos")}
                className="btn-glow inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-foreground text-background font-semibold text-sm sm:text-base"
              >
                Ver projetos
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo("contato")}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass font-semibold text-sm sm:text-base"
              >
                Entrar em contato
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5 max-w-xl">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4 sm:p-5">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black">
                    <Counter to={s.to} suffix={s.suffix} duration={3000} />
                  </div>

                  <div className="text-[11px] sm:text-xs text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 18 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="relative float-anim max-w-[560px] mx-auto">
              <div className="absolute -inset-7 bg-gradient-to-br from-sky-500/30 via-fuchsia-500/30 to-emerald-500/30 blur-3xl rounded-[2rem]" />

              <div className="relative glass rounded-[1.6rem] p-1 shadow-2xl rotate-[-2deg]">
                <div className="flex items-center gap-1.5 px-5 py-4 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80" />

                  <span className="ml-4 text-xs font-mono font-bold text-muted-foreground">
                    developer.tsx
                  </span>
                </div>

                <pre className="p-6 xl:p-7 text-[13px] xl:text-[14px] font-mono leading-[1.7] overflow-hidden text-foreground/90">
                  <code>
                    <span>const </span>
                    <span className="text-fuchsia-400 font-bold">
                      developer
                    </span>
                    <span> = {"{"}</span>
                    {"\n  "}
                    <span className="text-sky-400 font-bold">name</span>
                    <span>: </span>
                    <span className="text-emerald-400 font-bold">
                      &apos;Vinícius Arruda&apos;
                    </span>
                    <span>,</span>
                    {"\n  "}
                    <span className="text-sky-400 font-bold">stack</span>
                    <span>: [</span>
                    {"\n    "}
                    <span className="text-emerald-400 font-bold">
                      &apos;React&apos;
                    </span>
                    <span>, </span>
                    <span className="text-emerald-400 font-bold">
                      &apos;Next.js&apos;
                    </span>
                    <span>,</span>
                    {"\n    "}
                    <span className="text-emerald-400 font-bold">
                      &apos;React Native&apos;
                    </span>
                    <span>,</span>
                    {"\n    "}
                    <span className="text-emerald-400 font-bold">
                      &apos;Node.js&apos;
                    </span>
                    <span>, </span>
                    <span className="text-emerald-400 font-bold">
                      &apos;Prisma&apos;
                    </span>
                    <span>,</span>
                    {"\n  ],"}
                    {"\n  "}
                    <span className="text-sky-400 font-bold">focus</span>
                    <span>: </span>
                    <span className="text-emerald-400 font-bold">
                      &apos;soluções modernas&apos;
                    </span>
                    <span>,</span>
                    {"\n  "}
                    <span className="text-sky-400 font-bold">build</span>
                    <span>: () =&gt; </span>
                    <span className="text-fuchsia-400 font-bold">
                      &apos;sites&apos;
                    </span>
                    <span> + </span>
                    <span className="text-fuchsia-400 font-bold">
                      &apos;apps&apos;
                    </span>
                    <span>,</span>
                    {"\n};"}
                  </code>
                </pre>
              </div>

              <div className="absolute -bottom-6 -left-5 glass rounded-xl p-4 glow-purple">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-400/20 grid place-items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground">Status</div>
                    <div className="text-sm font-semibold">Deploy ao vivo</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-3 glass rounded-xl px-4 py-3 glow-blue">
                <div className="font-mono text-xs font-bold text-muted-foreground">
                  v 2026.1
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}