import Link from "next/link";
import { Year } from "./year";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-bg-deep">
      <div className="mx-auto max-w-content px-6">
        {/* Footer row */}
        <div className="flex flex-col items-start justify-between gap-6 border-t border-[color:var(--on-deep-rule)] py-10 md:flex-row md:items-center md:py-12">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-display text-[20px] font-medium leading-none tracking-tight text-[color:var(--on-deep)]"
            >
              Capture Lab
            </Link>
            <a
              href="https://www.linkedin.com/company/capture-lab-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[color:var(--on-deep-2)] transition-colors hover:text-[color:var(--on-deep)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.86 3.36-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z" />
              </svg>
            </a>
            <a
              href="https://x.com/capture_lab_ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-[color:var(--on-deep-2)] transition-colors hover:text-[color:var(--on-deep)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          <nav className="eyebrow flex flex-wrap items-center gap-x-7 gap-y-2 text-[color:var(--on-deep-3)]">
            <a
              href="#how-it-works"
              className="transition-colors hover:text-[color:var(--on-deep)]"
            >
              How it works
            </a>
            <a
              href="#security"
              className="transition-colors hover:text-[color:var(--on-deep)]"
            >
              Security
            </a>
            <Link
              href="/privacy"
              className="transition-colors hover:text-[color:var(--on-deep)]"
            >
              Privacy
            </Link>
          </nav>

          <p className="eyebrow text-[color:var(--on-deep-3)]">
            © <Year /> Capture Lab
          </p>
        </div>
      </div>
    </footer>
  );
}
