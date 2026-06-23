/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { motion } from "framer-motion";
import { useTheme } from "../theme/ThemeProvider";

import {
  SiCloudinary,
  SiCss,
  SiExpo,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  { name: "React", icon: SiReact, color: "#38BDF8" },
  { name: "Next.js", icon: SiNextdotjs, color: "auto" },
  { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "Expo", icon: SiExpo, color: "auto" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#34D399" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Prisma", icon: SiPrisma, color: "#A855F7" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#00758F" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "GitHub", icon: SiGithub, color: "auto" },
  { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
];

export function Habilidades() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const repeatedSkills = [...skills, ...skills, ...skills];

  return (
    <section
      id="habilidades"
      className="relative h-[72px] overflow-hidden flex items-center"
    >
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex w-max items-center gap-4"
          animate={{
            x: ["0%", "-33.333%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {repeatedSkills.map((s, index) => {
            const Icon = s.icon;

            const iconColor =
              s.color === "auto"
                ? isDark
                  ? "#FFFFFF"
                  : "#18181B"
                : s.color;

            return (
              <motion.div
                key={`${s.name}-${index}`}
                whileHover={{
                  y: -2,
                  scale: 1.04,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  glass
                  shrink-0
                  rounded-full
                  px-5
                  py-2.5
                  flex
                  items-center
                  gap-2.5
                  cursor-default
                  group
                "
              >
                <Icon
                  className="w-5 h-5 transition-transform group-hover:rotate-12"
                  style={{
                    color: iconColor,
                  }}
                />

                <span className="text-sm font-semibold whitespace-nowrap">
                  {s.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Habilidades;