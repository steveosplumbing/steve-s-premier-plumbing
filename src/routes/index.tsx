import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-pipes.jpg";
import steveImg from "@/assets/steve-portrait.jpg";
import logoWordmark from "@/assets/logo-wordmark.jpeg";
import brandBanner from "@/assets/brand-banner.jpeg";
import fistFire from "@/assets/fist-fire.png";
import fistWater from "@/assets/fist-water.png";
import badgeExperience from "@/assets/badge-experience.jpeg";
import partnerTrio from "@/assets/partner-trio.jpeg";
import partnerWebb from "@/assets/partner-webb.png";
import partnerUponor from "@/assets/partner-uponor.jpeg";
import bbbBadge from "@/assets/bbb-accredited.jpeg";
import { AmbientFX } from "@/components/AmbientFX";
import {
  Phone, Wrench, Flame, Snowflake, Droplets, ShieldCheck, Clock, Star,
  MessageCircle, MapPin, ArrowRight, Quote, BadgeCheck, Award, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Steve-O's Plumbing LLC — Plumbing, Heating & AC | NH & VT" },
      { name: "description", content: "Licensed in NH & VT. Plumbing, heating, and air conditioning — service, repair, and whole-house installs. Fully insured. 5★ rated. Call (603) 477-6916." },
      { property: "og:title", content: "Steve-O's Plumbing LLC — Done Right The First Time" },
      { property: "og:description", content: "Plumbing • Heating • Air Conditioning across New Hampshire and Vermont." },
    ],
  }),
  component: Home,
});

const PHONE = "(603) 477-6916";
const TEL = "tel:+16034776916";


function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <BrandStrip />
      <WhyUs />
      <About />
      <Partners />
      <Reviews />
      <CTA />
      <Footer />
      <MobileCallBar />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 min-w-0">
          <img src={logoWordmark} alt="Steve-O's Plumbing LLC" className="h-9 w-auto rounded-sm bg-white/95 px-1.5 py-1 object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#why" className="hover:text-foreground transition">Why Steve</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#reviews" className="hover:text-foreground transition">Reviews</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a href={TEL} className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-primary-foreground shrink-0" style={{ background: "var(--gradient-fire)", boxShadow: "var(--shadow-fire)" }}>
          <Phone className="w-4 h-4" /> <span className="hidden sm:inline">{PHONE}</span><span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      </div>
      <AmbientFX variant="embers+water" intensity={1} />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 space-y-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-card/50 backdrop-blur text-xs uppercase tracking-[0.22em]">
            <span className="w-1.5 h-1.5 rounded-full bg-fire-glow animate-pulse" />
            Licensed in NH &amp; VT · Fully Insured
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] uppercase">
            Plumbing. Heating.
            <br />
            <span style={{ background: "var(--gradient-fire)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Air conditioning.</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-medium normal-case tracking-normal" style={{ fontFamily: "var(--font-sans)" }}>
              Done right the first time.
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            From a single dripping fixture to a complete whole-house repipe — Steve-O's Plumbing LLC delivers honest answers, clean workmanship, and the kind of craft most homeowners forgot still existed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={TEL} className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md font-semibold text-primary-foreground" style={{ background: "var(--gradient-fire)", boxShadow: "var(--shadow-fire)" }}>
              <Phone className="w-5 h-5" /> Call {PHONE}
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md font-medium border border-border bg-card/50 backdrop-blur hover:bg-card transition">
              View Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Star className="w-4 h-4 fill-fire-glow text-fire-glow" /><span className="text-foreground font-semibold">5.0</span> · 93+ Google reviews</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-ice" /> BBB Accredited</span>
            <span className="inline-flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-fire-glow" /> 10+ years experience</span>
          </div>
        </div>

        {/* Fire & Ice fists */}
        <div className="hidden lg:block lg:col-span-5">
          <div className="relative aspect-square">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-72 h-72 rounded-full blur-3xl flame-breathe" style={{ background: "radial-gradient(circle, oklch(0.7 0.22 40 / 0.5), transparent 65%)" }} />
              <div className="absolute w-72 h-72 rounded-full blur-3xl ice-shimmer" style={{ background: "radial-gradient(circle, oklch(0.78 0.16 235 / 0.45), transparent 65%)", transform: "translate(40%, 30%)" }} />
            </div>
            <img src={fistFire} alt="Fire fist representing heating services" className="absolute top-4 left-0 w-[78%] -rotate-6 drop-shadow-[0_20px_40px_rgba(255,120,40,0.35)]" />
            <img src={fistWater} alt="Water fist representing plumbing services" className="absolute bottom-2 right-0 w-[78%] rotate-6 drop-shadow-[0_20px_40px_rgba(80,160,255,0.35)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { n: "5.0", l: "Google Rated" },
    { n: "93+", l: "Five-Star Reviews" },
    { n: "NH + VT", l: "Licensed States" },
    { n: "100%", l: "Fully Insured" },
  ];
  return (
    <section className="border-y border-border bg-card/40 relative overflow-hidden">
      <div className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-radial)" }} />
      <div className="relative max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((it) => (
          <div key={it.l} className="text-center">
            <div className="font-display font-bold text-3xl md:text-5xl tracking-wide" style={{ background: "var(--gradient-fire)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{it.n}</div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mt-2">{it.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Droplets,
      tone: "ice" as const,
      title: "Plumbing",
      desc: "Service and repair through complete whole-house plumbing. Leaks, fixtures, faucets, sinks, water lines, and full repipes — diagnosed precisely and installed clean.",
      bullets: ["Leak detection & repair", "Fixtures, faucets & sinks", "Water lines & repipes", "Water heaters (tank & tankless)"],
    },
    {
      icon: Flame,
      tone: "fire" as const,
      title: "Heating",
      desc: "Boilers, oil-fired furnaces, expansion tanks, zone valves and tune-ups. Cold-snap rescues are a specialty — Steve will keep your home warm.",
      bullets: ["Boiler repair & install", "Oil furnace service", "Expansion tanks & zone valves", "Annual tune-ups"],
    },
    {
      icon: Snowflake,
      tone: "ice" as const,
      title: "Air Conditioning",
      desc: "Central AC and mini-split sales, service, and repair. Quiet, efficient cooling installed by a licensed professional who stands behind the work.",
      bullets: ["Central AC service", "Mini-split installs", "Diagnostics & repair", "Seasonal maintenance"],
    },
  ];
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <AmbientFX variant="embers+snow" intensity={0.6} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-fire mb-4">What Steve does</div>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] uppercase">Plumbing, heating &amp; AC — sales, service &amp; install.</h2>
          <p className="text-muted-foreground mt-6 text-lg">
            From a stuck shut-off valve to a full mechanical room rebuild, every job gets the same precision and respect. Service, repair, and complete whole-house plumbing across New Hampshire and Vermont.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, bullets, tone }) => (
            <article
              key={title}
              className="group relative rounded-2xl border border-border bg-card/70 backdrop-blur p-8 hover:border-fire/50 transition-colors duration-500"
              style={{ boxShadow: tone === "fire" ? "var(--shadow-fire)" : "var(--shadow-ice)" }}
            >
              <div className="w-12 h-12 rounded-md flex items-center justify-center mb-6 border border-border" style={{ background: tone === "fire" ? "var(--gradient-fire)" : "var(--gradient-ice)", boxShadow: "var(--shadow-inset-fire)" }}>
                <Icon className="w-5 h-5 text-ink" />
              </div>
              <h3 className="font-display font-bold text-2xl uppercase mb-3 tracking-wide">{title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${tone === "fire" ? "text-fire-glow" : "text-ice"}`} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-4 text-sm">
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur p-5 flex items-start gap-3">
            <Clock className="w-5 h-5 text-fire-glow mt-0.5 shrink-0" />
            <div>
              <div className="font-semibold">Hours</div>
              <div className="text-muted-foreground">Monday – Friday, 8:00 AM – 6:00 PM. Weekends by availability — call to ask.</div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur p-5 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-ice mt-0.5 shrink-0" />
            <div>
              <div className="font-semibold">Licensed &amp; Insured</div>
              <div className="text-muted-foreground">Licensed in the State of New Hampshire and the State of Vermont. Fully insured.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandStrip() {
  return (
    <section className="relative overflow-hidden border-y border-border">
      <div className="absolute inset-0 bg-black" />
      <AmbientFX variant="embers+water" intensity={0.5} />
      <div className="relative max-w-7xl mx-auto">
        <img src={brandBanner} alt="Steve-O's Plumbing LLC — Plumbing, Heating, Air Conditioning" className="w-full h-auto object-contain" />
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    { icon: Wrench, title: "Master Craftsmanship", desc: "Quality parts, clean job sites, and the experience to diagnose what others miss." },
    { icon: MessageCircle, title: "Constant Communication", desc: "Photos and videos throughout the job, especially when you can't be home. You always know what's happening." },
    { icon: ShieldCheck, title: "Honest Pricing", desc: "Fair rates and no surprises at the end. Steve will save you money up front when he can." },
    { icon: BadgeCheck, title: "Licensed in NH & VT", desc: "Properly licensed in two states and fully insured — your home and your investment are protected." },
  ];
  return (
    <section id="why" className="py-28 relative overflow-hidden" style={{ background: "var(--gradient-radial)" }}>
      <AmbientFX variant="snow" intensity={0.7} />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <div className="text-xs uppercase tracking-[0.3em] text-fire mb-4">Why Steve-O's</div>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] uppercase mb-6">The plumber your neighbor keeps recommending.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Steve doesn't just fix pipes. He builds trust — one careful diagnosis, one honest conversation, one clean job site at a time. It's why customers stay customers for life.
          </p>

          {/* Pay me for my experience badge */}
          <div className="mt-8 flex items-center gap-5 p-5 rounded-2xl border border-border bg-card/60 backdrop-blur">
            <img src={badgeExperience} alt="Pay me for my experience, not my time" className="w-24 h-24 object-contain rounded-lg" />
            <div>
              <div className="font-display font-bold text-xl uppercase tracking-wide">Pay for experience.</div>
              <p className="text-sm text-muted-foreground mt-1">A decade of solving the problems other technicians walked away from.</p>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-xl border border-border bg-card/60 backdrop-blur">
            <Quote className="w-6 h-6 text-fire mb-3" />
            <p className="italic leading-relaxed">"For as long as Steve-O remains in business, he will be the only plumber I call."</p>
            <div className="mt-3 text-sm text-muted-foreground">— Jeremy, longtime customer</div>
          </div>
        </div>

        <div className="space-y-px bg-border rounded-2xl overflow-hidden border border-border">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-8 flex gap-5">
              <div className="shrink-0 w-11 h-11 rounded-md border border-border flex items-center justify-center" style={{ background: "var(--gradient-fire)" }}>
                <Icon className="w-5 h-5 text-ink" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl uppercase tracking-wide mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <AmbientFX variant="embers" intensity={0.5} />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl opacity-25 blur-2xl" style={{ background: "var(--gradient-fire)" }} />
            <img src={steveImg} alt="Steve, owner of Steve-O's Plumbing LLC" loading="lazy" width={1024} height={1024} className="relative rounded-2xl border border-border w-full aspect-square object-cover" style={{ boxShadow: "var(--shadow-elegant)" }} />
            <div className="absolute -bottom-6 -right-6 px-5 py-4 rounded-xl border border-border bg-card backdrop-blur" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Owner-Operator</div>
              <div className="font-display font-bold text-xl uppercase tracking-wide">Steve-O</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs uppercase tracking-[0.3em] text-fire">Meet the Owner</div>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] uppercase">A decade of pipes, problems, and getting it right.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Steve-O's Plumbing LLC was built on a simple promise: <span className="text-foreground italic">"Do it once, do it right, and everyone is happy."</span>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Over a decade of hands-on experience across plumbing, heating, and air conditioning means complex diagnoses get simpler — and your home gets back to normal faster. Steve picks up his own phone, runs his own jobs, and stands behind every weld, valve, and fitting.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            {[
              { k: "Owner-Operated", v: "Direct line to Steve" },
              { k: "NH + VT Licensed", v: "Two-state coverage" },
              { k: "Fully Insured", v: "Your home is protected" },
            ].map((b) => (
              <div key={b.k} className="p-4 rounded-lg border border-border bg-card/50">
                <div className="font-semibold">{b.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{b.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners = [
    { src: partnerWebb, alt: "Webb" },
    { src: partnerTrio, alt: "Trio Cast Iron Boilers" },
    { src: partnerUponor, alt: "Uponor" },
  ];
  return (
    <section className="py-20 border-y border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-fire mb-3">Trusted product partners</div>
            <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide">We install the brands we trust.</h3>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card/60">
            <img src={bbbBadge} alt="BBB Accredited Business — valid through February 2027" className="h-14 w-auto rounded-md object-contain bg-white" />
            <div className="text-sm">
              <div className="font-semibold">BBB Accredited Business</div>
              <div className="text-muted-foreground text-xs">Valid through February 2027</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 items-center">
          {partners.map((p) => (
            <div key={p.alt} className="flex items-center justify-center p-6 rounded-xl border border-border bg-white/95 hover:bg-white transition">
              <img src={p.src} alt={p.alt} className="h-14 md:h-16 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { name: "Dick Hartmann", text: "Came across a unique and difficult problem and was lucky to find Steve. He didn't blink, responded immediately and worked diligently to solve a problem others wouldn't touch. Steve provided feedback including photos throughout the project.", tag: "Difficult diagnosis" },
    { name: "Patty Williams", text: "Steve is the best. He really is a caring person and works hard to help his clients. I truly didn't know there were any more honest businesses around. He came when nobody else wanted to.", tag: "Honest & caring" },
    { name: "Paul J. Roettger", text: "No doubt there are a few heating, AC & plumbing technicians around that are really good. Steve is exceptional. His high-level performance is a proven commodity.", tag: "Master craftsman" },
    { name: "Christine French", text: "Literally just picked his number from yahoo. Called him late Friday afternoon with a water heater issue. He stopped by on his way home and fixed the problem!", tag: "Same-day rescue" },
    { name: "Darren Kelly", text: "Second year in a row Steve made time for me and saved me in cold weather. He sent me videos and had constant communication on what he was finding.", tag: "Repeat customer" },
    { name: "April Aiken", text: "Our boiler died in the coldest snap of the season. He responded immediately with a quote and we hired him the next day. He moved his entire schedule to help us.", tag: "Cold-snap save" },
  ];
  return (
    <section id="reviews" className="py-28 relative overflow-hidden" style={{ background: "var(--gradient-radial)" }}>
      <AmbientFX variant="water" intensity={0.7} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-fire mb-4">Voices from the Granite &amp; Green Mountain States</div>
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] uppercase">93 five-star reviews. Zero compromises.</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-6 h-6 fill-fire-glow text-fire-glow" />)}</div>
            <div>
              <div className="font-display font-bold text-2xl">5.0</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Google Rated</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <article key={r.name} className="p-7 rounded-2xl border border-border bg-card/70 backdrop-blur flex flex-col gap-5 hover:border-fire/50 transition-colors duration-500">
              <div className="flex items-center justify-between">
                <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-fire-glow text-fire-glow" />)}</div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-fire-glow px-2 py-1 rounded border border-fire/30">{r.tag}</span>
              </div>
              <p className="leading-relaxed text-foreground/90">"{r.text}"</p>
              <div className="mt-auto pt-4 border-t border-border text-sm text-muted-foreground">— {r.name}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <AmbientFX variant="embers+water" intensity={1} />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-border p-12 md:p-16 text-center bg-card/60 backdrop-blur" style={{ boxShadow: "var(--shadow-elegant)" }}>
          <div className="absolute inset-x-0 top-0 h-px" style={{ background: "var(--gradient-fireice)" }} />
          <div className="text-xs uppercase tracking-[0.3em] text-fire mb-4">Ready when you are</div>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] uppercase max-w-3xl mx-auto">
            Got a leak, a cold house, or a problem nobody else can solve?
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Steve picks up the phone. Call now for honest, expert service across New Hampshire and Vermont.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={TEL} className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-md font-semibold text-primary-foreground text-lg" style={{ background: "var(--gradient-fire)", boxShadow: "var(--shadow-fire)" }}>
              <Phone className="w-5 h-5" /> {PHONE}
            </a>
            <a href="sms:+16034776916" className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-md font-medium border border-border bg-card hover:bg-secondary transition text-lg">
              <MessageCircle className="w-5 h-5" /> Text Steve
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-fire" /> Mon–Fri · 8 AM – 6 PM</span>
            <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-ice" /> Serving NH &amp; VT</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-fire-glow" /> Licensed · Insured</span>
            <span className="inline-flex items-center gap-2"><Award className="w-4 h-4 text-ice-glow" /> BBB Accredited</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-3">
          <img src={logoWordmark} alt="Steve-O's Plumbing LLC" className="h-10 w-auto rounded-sm bg-white/95 px-1.5 py-1 object-contain" />
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Steve-O's Plumbing LLC · Licensed in NH &amp; VT · Fully Insured
        </div>
        <div className="md:text-right text-sm">
          <a href={TEL} className="inline-flex items-center gap-2 text-fire-glow hover:text-fire transition">
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
        </div>
      </div>
    </footer>
  );
}

function MobileCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur p-3 flex gap-2">
      <a href={TEL} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md font-semibold text-primary-foreground text-sm" style={{ background: "var(--gradient-fire)" }}>
        <Phone className="w-4 h-4" /> Call {PHONE}
      </a>
      <a href="sms:+16034776916" aria-label="Text Steve" className="inline-flex items-center justify-center px-4 py-3 rounded-md border border-border bg-card">
        <MessageCircle className="w-4 h-4" />
      </a>
    </div>
  );
}
