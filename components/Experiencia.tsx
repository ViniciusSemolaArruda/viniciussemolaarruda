/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Building2,
  Camera,
  Code2,
  Globe2,
  Landmark,
  MapPin,
  Smartphone,
} from "lucide-react";

const cities = [
  "Vassouras",
  "Duque de Caxias",
  "Paty do Alferes",
  "Paulo de Frontin",
  "Campos dos Goytacazes",
];

const services = [
  { icon: Globe2, title: "Sites", color: "text-sky-400" },
  { icon: Smartphone, title: "Apps", color: "text-fuchsia-400" },
  { icon: Code2, title: "Sistemas", color: "text-emerald-400" },
];

export function Experiencia() {
  return (
    <section
      id="experiencia"
      className="relative py-16 lg:py-20 overflow-hidden"
    >
      <div
        className="aurora-blob bg-sky-500"
        style={{ width: 360, height: 360, top: "5%", left: "-12%" }}
      />

      <div
        className="aurora-blob bg-fuchsia-500"
        style={{ width: 320, height: 320, bottom: "-15%", right: "-10%" }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="w-full max-w-[1500px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-[0.75fr_1.25fr] gap-6 lg:gap-12 items-end mb-10"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400">
                // experiência
              </span>

              <h2 className="mt-4 font-black leading-[0.98] tracking-tighter">
                <span className="block text-[2.4rem] sm:text-[3.1rem] lg:text-[3.7rem] xl:text-[4.2rem]">
                  Tecnologia em
                  <br />
                  <span className="gradient-text">projetos reais.</span>
                </span>
              </h2>
            </div>

            <p className="max-w-4xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Minha experiência une desenvolvimento web, aplicativos, sistemas,
              soluções digitais para empresas, prefeituras e projetos ligados ao
              turismo religioso, inovação e análise de dados.
            </p>
          </motion.div>

          <div className="space-y-5">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl px-5 py-5 sm:px-6 lg:px-7"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-sky-400 via-fuchsia-400 to-emerald-400" />

              <div className="grid lg:grid-cols-[170px_1fr_auto] gap-6 items-center">
                <div className="w-[135px] h-[135px] sm:w-[150px] sm:h-[150px] rounded-3xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-4 mx-auto lg:mx-0">
                  <img
                    src="/logo-capadocia.png"
                    alt="Logo Capadócia Produções"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sky-400 mb-2">
    <Building2 className="w-4 h-4"/>

    <span className="font-mono text-[11px] uppercase tracking-[0.25em]">
        empresa atual
    </span>
</div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight">
                    Capadócia Produções e Eventos LTDA
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm sm:text-base text-muted-foreground leading-relaxed">

Atualmente atuo na Capadócia Produções e Eventos LTDA desenvolvendo
sites, sistemas e aplicativos para empresas privadas e órgãos públicos,
criando soluções digitais modernas, responsivas e voltadas para facilitar
processos internos, divulgação institucional e atendimento ao público.

</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cities.map((city) => (
                      <span
                        key={city}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-muted-foreground"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex lg:flex-col flex-wrap gap-2 lg:min-w-[130px]">
                  {services.map((service) => {
                    const Icon = service.icon;

                    return (
                      <div
                        key={service.title}
                        className="flex items-center gap-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-2"
                      >
                        <Icon className={`w-4 h-4 ${service.color}`} />
                        <span className="text-sm font-bold">
                          {service.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl px-5 py-5 sm:px-6 lg:px-7"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-400 via-sky-400 to-fuchsia-400" />

              <div className="grid lg:grid-cols-[170px_1fr_360px] gap-6 items-center">
                <div className="w-[135px] h-[135px] sm:w-[150px] sm:h-[150px] rounded-3xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-3 mx-auto lg:mx-0 overflow-hidden">
                  <img
                    src="/logo-observatorio.png"
                    alt="Logo Observatório Internacional de Turismo Religioso Laico"
                    className="max-w-full max-h-full object-contain scale-[1.06]"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 text-emerald-400 mb-2">
                    <Landmark className="w-4 h-4" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em]">
                      tecnologia e pesquisa
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight">
                    Observatório Internacional de Turismo Religioso Laico
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Tecnologia aplicada para apoiar pesquisas, análise de dados
                    e inovação no turismo religioso laico no Brasil e na América
                    Latina.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/[0.04] p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-emerald-400/15 grid place-items-center shrink-0">
                      <BrainCircuit className="w-5 h-5 text-emerald-400" />
                    </div>

                    <div>
                      <h4 className="font-bold">IA para eventos religiosos</h4>

                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        Soluções com câmeras, visão computacional e análise de
                        dados para estimar participação de público.
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-semibold">
                          <Camera className="w-3.5 h-3.5 text-sky-400" />
                          Câmeras
                        </span>

                        <span className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-semibold">
                          <BrainCircuit className="w-3.5 h-3.5 text-fuchsia-400" />
                          IA aplicada
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;