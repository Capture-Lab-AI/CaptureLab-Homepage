"use client";

import { motion, useScroll, useSpring } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#portfolio", label: "The portfolio" },
  { href: "#method", label: "The method" },
  { href: "#instrument", label: "The instrument" },
  { href: "#buyers", label: "Who it's for" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* reading progress — a hairline of brand pink */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-primary"
        style={{ scaleX: progress }}
      />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          aria-label="Capture Lab home"
          className="shrink-0 transition-transform duration-200 hover:scale-[1.03]"
        >
          <Image
            src="/logo.png"
            alt="Capture Lab"
            width={144}
            height={26}
            priority
            className="brightness-[1.35]"
          />
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </a>
          ))}
        </div>
        <a
          href="#demo"
          className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-110"
        >
          Book a demo
        </a>
      </nav>
    </header>
  );
}
