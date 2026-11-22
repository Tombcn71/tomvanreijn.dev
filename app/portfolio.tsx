"use client";

import { createElement, useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Mic, Moon, Sun } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { STACK, STACK_EN, TEKSTEN, type Taal } from "@/lib/teksten";

const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID ?? "";
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@tomvanreijn.dev";

export function Portfolio({ taal }: { taal: Taal }) {
  const [donker, setDonker] = useState(false);

  useEffect(() => {
    setDonker(document.documentElement.classList.contains("dark"));
  }, []);

  function wissel() {
    const nieuw = !donker;
    setDonker(nieuw);
    document.documentElement.classList.toggle("dark", nieuw);
    try {
      localStorage.setItem("thema", nieuw ? "donker" : "licht");
    } catch {}
  }

  const t = TEKSTEN[taal];
  const stack = taal === "nl" ? STACK : STACK_EN;

  return (
    <div className="min-h-screen">
      {/* Navigatie */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <a href="#top" className="font-semibold tracking-tight">
            tomvanreijn<span className="text-muted-foreground">.dev</span>
          </a>
          <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={wissel}
            aria-label={donker ? "Lichte modus" : "Donkere modus"}
            className="grid size-8 place-items-center rounded-full border border-border text-muted-foreground transition hover:text-foreground">
            {donker ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <div className="flex items-center gap-1 rounded-full border border-border p-0.5 text-xs font-semibold">
            {(["nl", "en"] as Taal[]).map((k) => (
              <Link
                key={k}
                href={k === "nl" ? "/" : "/en"}
                hrefLang={k}
                aria-current={taal === k ? "page" : undefined}
                className={`rounded-full px-3 py-1 uppercase transition ${
                  taal === k ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}>
                {k}
              </Link>
            ))}
          </div>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="raster pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-4 pb-20 pt-16 md:grid-cols-[1fr_auto] md:pt-28">
            <div>
              <Badge variant="outline" className="mb-6 rounded-full border-border px-3 py-1 text-xs text-muted-foreground">
                {t.rol}
              </Badge>
              <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">{t.kop}</h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">{t.sub}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <a href="#assistent">
                    <Mic /> {t.cta}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href="#stack">{t.cta2}</a>
                </Button>
              </div>
            </div>
            <Image
              src="/tom.jpg"
              alt="Tom van Reijn"
              width={400}
              height={400}
              priority
              className="size-44 rounded-full object-cover grayscale ring-1 ring-border sm:size-56"
            />
          </div>
        </section>

        {/* Assistent: de grote plek */}
        <section id="assistent" className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-5xl px-4 py-20 md:py-28">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.agentLabel}</p>
            <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">{t.agentKop}</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">{t.agentTekst}</p>

            <div className="mt-10 grid place-items-center rounded-3xl border border-border bg-background px-6 py-16 text-center">
              <span className="relative grid size-24 place-items-center rounded-full bg-foreground text-background">
                <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-foreground/15" />
                <Mic className="relative size-9" />
              </span>
              <p className="mt-6 text-sm text-muted-foreground">
                {AGENT_ID ? t.agentTekst.split(".")[0] + "." : t.agentBinnenkort}
              </p>
              <div className="mt-8 w-full max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.voorbeeldKop}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {t.voorbeelden.map((v) => (
                    <span key={v} className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
                      &ldquo;{v}&rdquo;
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="mx-auto max-w-5xl px-4 py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.stackKop}</h2>
          <p className="mt-2 text-muted-foreground">{t.stackTekst}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((s) => (
              <Card key={s.naam} className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">{s.naam}</CardTitle>
                  <CardDescription>{s.tekst}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-5xl px-4 py-20 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{t.contactKop}</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">{t.contactTekst}</p>
            <Button asChild size="lg" className="mt-8 rounded-full">
              <a href={`mailto:${EMAIL}`}>{t.mail}</a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} tomvanreijn.dev. {t.rechten}
      </footer>

      {/* ElevenLabs-assistent: verschijnt pas als het agent-id is ingevuld. */}
      {AGENT_ID && (
        <>
          {createElement("elevenlabs-convai", { "agent-id": AGENT_ID })}
          <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" strategy="lazyOnload" />
        </>
      )}
    </div>
  );
}
