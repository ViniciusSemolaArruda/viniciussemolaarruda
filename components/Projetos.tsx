/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X, ZoomIn } from "lucide-react";

const projects = [
  {
    id: "onde-tem-evento",
    name: "Onde Tem Evento Rio",
    summary:
      "Plataforma para divulgação, descoberta e gerenciamento de eventos no Estado do Rio de Janeiro.",
    detail:
      "Plataforma composta por site e aplicativo mobile desenvolvidos para conectar organizadores e participantes. O sistema permite cadastrar eventos, aprovar publicações, exibir eventos em mapas interativos, utilizar filtros avançados, curtir, compartilhar, salvar favoritos, vender ingressos e gerenciar conteúdos através de um painel administrativo.",
    tags: ["React Native", "Next.js", "Prisma", "PostgreSQL"],
    image: "/eventorio.png",
    featured: true,
  },
  {
    id: "capadocia",
    name: "Capadócia Produções",
    summary:
      "Site institucional desenvolvido para apresentar serviços, eventos e projetos da empresa.",
    detail:
      "Portal institucional responsivo desenvolvido para a Capadócia Produções e Eventos LTDA, contendo apresentação da empresa, divulgação de projetos, notícias, serviços prestados, áreas administrativas e integração com plataformas digitais para facilitar a comunicação com clientes e parceiros.",
    tags: ["Next.js", "TypeScript"],
    image: "/capadociasite.png",
    featured: true,
  },
  {
    id: "expo",
    name: "Expo Carnaval Rio Summit",
    summary: "Portal oficial do evento Expo Carnaval Rio Summit 2025.",
    detail:
      "Sistema desenvolvido para apresentar a programação do evento, palestrantes, oficinas, locais das atividades, credenciamento, informações institucionais e gerenciamento de conteúdos administrativos relacionados ao maior encontro de economia criativa ligado ao Carnaval.",
    tags: ["Next.js", "Prisma"],
    image: "/expo.png",
  },
  {
    id: "gestao-publica",
    name: "Sistema de Gestão Pública",
    summary:
      "Sistema para auxiliar prefeituras no acompanhamento do PPA, LDO, LOA e execução orçamentária.",
    detail:
      "Projeto desenvolvido para facilitar o trabalho das secretarias municipais, permitindo cadastrar ações, prioridades, metas, acompanhar execução orçamentária, gerar relatórios automáticos e visualizar mapas de correlação entre planejamento e execução financeira.",
    tags: ["React", "Prisma"],
    image: "/gestao.png",
  },
  {
    id: "observatorio",
    name: "Observatório Laico",
    summary:
      "Portal de pesquisas, notícias e indicadores sobre turismo religioso no Brasil e América Latina.",
    detail:
      "Portal desenvolvido para o Observatório Internacional do Turismo Religioso Laico no Brasil e América Latina, reunindo estudos, notícias, artigos, indicadores, análises, publicações acadêmicas e ferramentas digitais voltadas para pesquisadores, gestores públicos e iniciativa privada.",
    tags: ["Next.js", "Cloudinary"],
    image: "/obs.png",
  },
  {
    id: "laico",
    name: "Laico",
    summary:
      "E-commerce especializado na comercialização de produtos de cunho religioso.",
    detail:
      "Plataforma de comércio eletrônico desenvolvida para a venda de artigos religiosos, permitindo aos usuários navegar por categorias, visualizar detalhes dos produtos, realizar compras, gerenciar pedidos e acessar uma experiência moderna, responsiva e segura. O sistema contempla catálogo de produtos, área administrativa, gerenciamento de estoque, pedidos e integração com meios de pagamento.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Cloudinary"],
    image: "/laico.png",
  },
  {
    id: "eu-acredito",
    name: "Instituto Eu Acredito",
    summary:
      "Site institucional para divulgação de ações sociais, projetos e iniciativas do instituto.",
    detail:
      "Projeto desenvolvido com foco em credibilidade institucional, apresentando missão, projetos realizados, notícias, parceiros, formas de contribuição e identidade visual moderna para fortalecer a presença digital da organização.",
    tags: ["Next.js"],
    image: "/institutoeuacredito.png",
  },
  {
    id: "unicon",
    name: "UNICON",
    summary:
      "Portal acadêmico desenvolvido para uma faculdade especializada na formação de profissionais de concierge.",
    detail:
      "Portal institucional criado para apresentar cursos, programas de formação, notícias, eventos, professores e informações acadêmicas da faculdade. O projeto foi desenvolvido com foco em credibilidade institucional, experiência do usuário e fortalecimento da presença digital da instituição de ensino.",
    tags: ["Next.js", "TypeScript", "CSS"],
    image: "/unicon.png",
  },
  {
    id: "criadorweb",
    name: "CriadorWeb",
    summary:
      "Plataforma SaaS para criação automatizada de sites profissionais.",
    detail:
      "Projeto de sistema onde usuários poderão escolher modelos prontos, personalizar cores, menus, imagens, textos e publicar seus próprios sites por assinatura mensal, funcionando como uma plataforma brasileira semelhante ao Wix e ao Webflow.",
    tags: ["Next.js", "Prisma"],
    image: "/criadorweb.png",
  },
  {
    id: "site-ncbp",
    name: "NCBP",
    summary:
      "Plataforma digital que conecta clientes a psicólogos, facilitando o acesso a atendimentos especializados.",
    detail:
      "Portal desenvolvido para aproximar pacientes e profissionais da psicologia, oferecendo funcionalidades para apresentação dos especialistas, busca por perfis, agendamento de atendimentos, divulgação de conteúdos informativos e fortalecimento da presença digital dos profissionais cadastrados.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/site NCBP.png",
  },
];

export function Projetos() {
  const [open, setOpen] = useState<string | null>(null);
  const [fullImage, setFullImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const active = projects.find((p) => p.id === open);
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" className="relative py-16 lg:py-20 overflow-hidden">
      <div
        className="aurora-blob bg-sky-500"
        style={{ width: 380, height: 380, top: "6%", left: "-12%" }}
      />

      <div
        className="aurora-blob bg-fuchsia-500"
        style={{ width: 340, height: 340, bottom: "-12%", right: "-10%" }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="w-full max-w-[1500px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-12 items-end mb-10"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400">
                // portfólio
              </span>

              <h2 className="mt-4 font-black leading-[0.98] tracking-tighter">
                <span className="block text-[2.4rem] sm:text-[3.1rem] lg:text-[3.8rem] xl:text-[4.3rem]">
                  Projetos
                  <br />
                  <span className="gradient-text">selecionados.</span>
                </span>
              </h2>
            </div>

            <p className="max-w-4xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Uma seleção de projetos que mostram minha experiência com sites,
              sistemas, aplicativos, plataformas digitais, painéis
              administrativos e soluções com banco de dados.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-5 xl:gap-6">
            {featuredProjects.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl"
              >
                <button
                  type="button"
                  onClick={() => setFullImage({ src: p.image, alt: p.name })}
                  className="relative w-full aspect-[16/9] bg-black/[0.18] overflow-hidden group cursor-zoom-in"
                  aria-label={`Abrir imagem do projeto ${p.name} em tela cheia`}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain p-4 sm:p-5 transition-transform duration-700 group-hover:scale-[1.035]"
                  />

                  <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </button>

                <div className="p-5 sm:p-6 lg:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
                        destaque
                      </span>

                      <h3 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">
                        {p.name}
                      </h3>
                    </div>

                    <button
                      onClick={() => setOpen(p.id)}
                      className="shrink-0 w-11 h-11 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center hover:scale-105 transition-transform"
                      aria-label={`Ver detalhes do projeto ${p.name}`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {p.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {otherProjects.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
              >
                <button
                  type="button"
                  onClick={() => setFullImage({ src: p.image, alt: p.name })}
                  className="relative w-full aspect-[16/10] bg-black/[0.14] overflow-hidden cursor-zoom-in"
                  aria-label={`Abrir imagem do projeto ${p.name} em tela cheia`}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </button>

                <div className="p-5">
                  <h3 className="text-lg font-black tracking-tight">
                    {p.name}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {p.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setOpen(p.id)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold hover:gap-3 transition-all"
                  >
                    Ver detalhes
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 18 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 18 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[88vh] overflow-y-auto rounded-[2rem] border border-white/10 bg-[#07070c] text-white shadow-2xl"
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/10 text-white backdrop-blur grid place-items-center hover:bg-white/20 transition-colors"
                aria-label="Fechar detalhes"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <button
                  type="button"
                  onClick={() =>
                    setFullImage({
                      src: active.image,
                      alt: active.name,
                    })
                  }
                  className="relative min-h-[260px] sm:min-h-[360px] lg:min-h-[560px] p-5 sm:p-8 bg-white/[0.04] flex items-center justify-center cursor-zoom-in"
                  aria-label={`Abrir imagem do projeto ${active.name} em tela cheia`}
                >
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-full h-full max-h-[520px] object-contain rounded-xl"
                  />

                  <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                    <ZoomIn className="w-4 h-4" />
                    Clique para ampliar
                  </span>
                </button>

                <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-[#0b0b12]">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-sky-400">
                    detalhes do projeto
                  </span>

                  <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                    {active.name}
                  </h3>

                  <p className="mt-5 text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                    {active.detail}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {active.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setFullImage({
                        src: active.image,
                        alt: active.name,
                      })
                    }
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-bold hover:scale-105 transition-transform"
                  >
                    Ver imagem maior
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {fullImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setFullImage(null)}
          >
            <button
              onClick={() => setFullImage(null)}
              className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/15 text-white backdrop-blur-md grid place-items-center hover:bg-white/20 transition-colors"
              aria-label="Fechar imagem em tela cheia"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.img
              src={fullImage.src}
              alt={fullImage.alt}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[96vw] max-h-[92vh] object-contain rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projetos;