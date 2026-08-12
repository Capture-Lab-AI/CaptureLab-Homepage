import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy · Capture Lab",
  description:
    "What Capture Lab collects when you sign in with Google, how we use it, and how to delete your account.",
};

const LAST_UPDATED = "June 29, 2026";

const CONTACT = (
  <a
    href="mailto:matthew@capture-lab.com"
    className="underline decoration-border underline-offset-4 transition hover:decoration-foreground"
  >
    matthew@capture-lab.com
  </a>
);

export default function PrivacyPage() {
  return (
    <div className="theme-light min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
          <Link href="/" aria-label="Capture Lab home">
            <Image src="/logo.png" alt="Capture Lab" width={122} height={22} />
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-prose px-6 py-16">
        <p className="eyebrow">Last updated {LAST_UPDATED}</p>
        <h1 className="mt-3 text-5xl">Privacy policy</h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Capture Lab is an agentic automation platform for IT teams. This page
          describes what we collect when you sign in with Google, what we do
          with it, and how you can have it removed.
        </p>

        <section className="mt-12">
          <h2 className="font-display text-2xl">What we collect</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            When you sign in to Capture Lab with Google, we receive the
            following profile fields from your Google account:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your profile photo</li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            That is the full set of data the Google sign-in flow shares with
            us. We do not request access to your Gmail, Calendar, Drive, or
            Contacts as part of authentication.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">How we use it</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Your Google profile data is used only for authentication and
            account display: identifying you across sessions, attaching your
            activity to the right account, and showing your name and photo in
            the Capture Lab interface so teammates can see who took what
            action. We do not use this data for advertising, profiling, resale,
            or training machine-learning models.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">Who we share it with</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We do not sell your Google account data, and we do not share it
            with third parties for their own purposes. Account data is stored
            in our Postgres database (hosted on Railway in the US region),
            scoped to your organization&rsquo;s workspace, and encrypted in
            transit. The only processors that touch your account data are the
            infrastructure providers we use to run the product (our database
            host, our authentication provider).
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">Deleting your account</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Email {CONTACT} from the address tied to your account and we will
            remove your user record, including the name, email, and profile
            photo received from Google, within 30 days.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">Contact</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Questions about this policy or a specific data request: {CONTACT}.
          </p>
        </section>

        <footer className="mt-16 border-t border-border pt-6">
          <p className="eyebrow">Capture Lab &middot; {LAST_UPDATED}</p>
        </footer>
      </article>
    </div>
  );
}
