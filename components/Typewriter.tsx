/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";

const WORDS = ["Sites profissionais", "Sistemas web", "Aplicativos mobile", "Soluções digitais"];

export function Typewriter({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = WORDS[index];
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (!deleting && sub === current) {
      timer = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && sub === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % WORDS.length);
    } else {
      timer = setTimeout(() => {
        setSub(
          deleting
            ? current.substring(0, sub.length - 1)
            : current.substring(0, sub.length + 1)
        );
      }, deleting ? 35 : 70);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [sub, deleting, index]);

  return (
    <span className={`font-mono gradient-text ${className}`}>
      {sub}
      <span className="caret inline-block w-[3px] h-[0.9em] align-middle bg-current ml-1" />
    </span>
  );
}