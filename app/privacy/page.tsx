import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy · Capture Lab",
  description:
    "What Capture Lab collects when you sign in with Google, how we use it, and how to delete your account.",
}

const LAST_UPDATED = "June 29, 2026"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <header className="border-b border-rule">
        <div className="mx-auto flex h-16 max-w-content items-center px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-[22px] font-medium leading-none tracking-tight text-ink"
          >
            <img
              src="/capture-lab-mark.png"
              alt=""
              className="h-7 w-7 object-contain"
            />
            Capture Lab
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-prose px-6 py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
          Last updated {LAST_UPDATED}
        </p>
        <h1 className="mt-3 font-display text-[44px] font-medium leading-[1.05] tracking-tight text-balance">
          Privacy policy
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-ink-2 text-pretty">
          Capture Lab is an agentic automation platform for IT teams. This page
          describes what we collect when you sign in with Google, what we do
          with it, and how you can have it removed.
        </p>

        <section className="mt-12">
          <h2 className="font-display text-[22px] font-medium tracking-tight">
            What we collect
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
            When you sign in to Capture Lab with Google, we receive the
            following profile fields from your Google account:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-[15px] leading-relaxed text-ink-2">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your profile photo</li>
          </ul>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
            That is the full set of data the Google sign-in flow shares with
            us. We do not request access to your Gmail, Calendar, Drive, or
            Contacts as part of authentication.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-[22px] font-medium tracking-tight">
            How we use it
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
            Your Google profile data is used only for authentication and
            account display: identifying you across sessions, attaching your
            activity to the right account, and showing your name and photo in
            the Capture Lab interface so teammates can see who took what
            action. We do not use this data for advertising, profiling, resale,
            or training machine-learning models.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-[22px] font-medium tracking-tight">
            Who we share it with
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
            We do not sell your Google account data, and we do not share it
            with third parties for their own purposes. Account data is stored
            in our Postgres database (hosted on Railway in the US region),
            scoped to your organization&rsquo;s workspace, and encrypted in
            transit.
            The only processors that touch your account data are the
            infrastructure providers we use to run the product (our database
            host, our authentication provider).
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-[22px] font-medium tracking-tight">
            Deleting your account
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
            Email{" "}
            <a
              href="mailto:matthew@capture-lab.com"
              className="underline decoration-rule-strong/40 underline-offset-4 transition hover:decoration-rule-strong"
            >
              matthew@capture-lab.com
            </a>{" "}
            from the address tied to your account and we will remove your user
            record, including the name, email, and profile photo received from
            Google, within 30 days.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-[22px] font-medium tracking-tight">
            Contact
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
            Questions about this policy or a specific data request:{" "}
            <a
              href="mailto:matthew@capture-lab.com"
              className="underline decoration-rule-strong/40 underline-offset-4 transition hover:decoration-rule-strong"
            >
              matthew@capture-lab.com
            </a>
            .
          </p>
        </section>

        <footer className="mt-16 border-t border-rule pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
            Capture Lab · {LAST_UPDATED}
          </p>
        </footer>
      </article>
    </main>
  )
}
