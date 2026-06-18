"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LinkButton, CtaDot } from "@/components/ui/button";

const CALENDLY = "https://calendly.com/matthew-capture-lab/30min";

const tabs = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#platform", label: "Platform" },
  { href: "#integrations", label: "Integrations" },
  { href: "#security", label: "Security" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[rgba(251,249,247,0.8)] backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-rule" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-[22px] font-medium leading-none tracking-tight text-ink"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/capture-lab-mark.png"
            alt=""
            className="h-7 w-7 object-contain"
          />
          Capture Lab
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {tabs.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              className="eyebrow relative text-ink-2 transition-colors duration-200 hover:text-ink after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-ink after:transition-[width] after:duration-300 after:ease-out after:content-[''] hover:after:w-full"
            >
              {tab.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="https://app.capture-lab.net/"
            className="eyebrow text-[13px] text-ink transition-colors duration-200 hover:text-accent"
          >
            Sign in
          </a>
          <LinkButton
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            size="md"
          >
            <CtaDot />
            Book a demo
          </LinkButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="-mr-1.5 flex h-9 w-9 items-center justify-center rounded-full text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-rule bg-[rgba(251,249,247,0.97)] backdrop-blur-md md:hidden"
        >
          <nav className="mx-auto flex max-w-content flex-col px-6 py-4">
            {tabs.map((tab) => (
              <a
                key={tab.href}
                href={tab.href}
                onClick={() => setOpen(false)}
                className="border-b border-rule py-3.5 font-display text-[19px] text-ink last:border-b-0"
              >
                {tab.label}
              </a>
            ))}
            <div className="mt-4 flex items-center gap-3">
              <LinkButton
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                className="flex-1"
              >
                <CtaDot />
                Book a demo
              </LinkButton>
              <LinkButton
                href="https://app.capture-lab.net/"
                variant="outline"
                size="md"
              >
                Sign in
              </LinkButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
