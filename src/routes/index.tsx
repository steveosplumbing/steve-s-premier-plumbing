import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-pipes.jpg";
import steveImg from "@/assets/steve-portrait.jpg";
import { Phone, Wrench, Flame, Droplets, ShieldCheck, Clock, Star, MessageCircle, MapPin, ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Steve-O's Plumbing — Master Plumber & Heating in NH | 5★ Rated" },
      { name: "description", content: "Steve-O's Plumbing — trusted New Hampshire master plumber. Boilers, water heaters, leaks, emergency repairs. 93+ five-star reviews. Call (603) 477-6916." },
      { property: "og:title", content: "Steve-O's Plumbing — Master Craftsman, 5★ Service" },
      { property: "og:description", content: "Done right the first time. Plumbing, heating & emergency service across New Hampshire." },
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
      <WhyUs />
      <About />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: "var(--gradient-copper)", boxShadow: "var(--shadow-inset-gold)" }}>
            <Wrench className="w-4 h-4 text-ink" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg">Steve-O's</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground -mt-0.5">Plumbing · NH</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#why" className="hover:text-foreground transition">Why Steve</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#reviews" className="hover:text-foreground transition">Reviews</a>
        </nav>
        <a href={TEL} className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-primary-foreground" style={{ background: "var(--gradient-copper)", boxShadow: "var(--shadow-copper)" }}>
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
        <img src={heroImg} alt="Polished copper plumbing pipes" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-card/40 backdrop-blur text-xs uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-copper-glow animate-pulse" />
            Now serving New Hampshire
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
            Master plumbing,<br />
            <span className="italic" style={{ background: "var(--gradient-copper)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              done right the first time.
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Honest answers, fair pricing, and craftsmanship you can stake your home on. Steve-O's Plumbing handles boilers, water heaters, leaks, and emergencies with the kind of care most contractors forgot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={TEL} className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md font-medium text-primary-foreground" style={{ background: "var(--gradient-copper)", boxShadow: "var(--shadow-copper)" }}>
              <Phone className="w-5 h-5" /> Call {PHONE}
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md font-medium border border-border bg-card/40 backdrop-blur hover:bg-card transition">
              Explore Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-copper-glow text-copper-glow" />)}</div>
              <span className="text-sm text-muted-foreground"><span className="text-foreground font-medium">5.0</span> · 93+ Google reviews</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl opacity-30 blur-2xl" style={{ background: "var(--gradient-copper)" }} />
            <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-8 space-y-6" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <div className="flex items-start gap-3">
                <Quote className="w-8 h-8 text-copper shrink-0" />
                <p className="text-lg leading-relaxed italic">
                  "When 3 other technicians couldn't find the issue with the boiler — Steve did. And fixed it in the most economical way."
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <div className="font-medium">Andrea Sandor</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Verified customer</div>
                </div>
                <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-copper-glow text-copper-glow" />)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { n: "5.0", l: "Google Rating" },
    { n: "93+", l: "Five-Star Reviews" },
    { n: "10+", l: "Years Experience" },
    { n: "24/7", l: "Emergency Response" },
  ];
  return (
    <section className="border-y border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((it) => (
          <div key={it.l} className="text-center">
            <div className="font-display text-4xl md:text-5xl" style={{ background: "var(--gradient-copper)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{it.n}</div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{it.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Droplets, title: "Plumbing & Repairs", desc: "Leaks, reroutes, fixtures, faucets, sinks, and full repipes — diagnosed precisely, fixed cleanly." },
    { icon: Flame, title: "Boilers & Heating", desc: "Boiler repair, oil furnace install & service, expansion tanks. Cold-snap rescues a specialty." },
    { icon: Wrench, title: "Water Heaters", desc: "Tank & tankless installs, replacements, and service — often back up and running same day." },
    { icon: ShieldCheck, title: "Emergency Service", desc: "Burst pipes, septic smells, no-heat calls. Fast diagnosis, photo & video updates throughout." },
    { icon: Droplets, title: "Water Quality", desc: "Oxidation systems, filtration, valve replacements, and water line work for cleaner, safer flow." },
    { icon: Clock, title: "Maintenance & Tune-Ups", desc: "Furnace and water heater service that catches problems before they become disasters." },
  ];
  return (
    <section id="services" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-copper mb-4">Our Craft</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">Specialists in the work other plumbers won't touch.</h2>
          <p className="text-muted-foreground mt-6 text-lg">From a stubborn faucet to a dead-of-winter boiler call — Steve treats every job with the same precision and respect.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative bg-card p-8 hover:bg-secondary transition-colors duration-500">
              <div className="w-12 h-12 rounded-md flex items-center justify-center mb-6 border border-border" style={{ background: "var(--gradient-copper)", boxShadow: "var(--shadow-inset-gold)" }}>
                <Icon className="w-5 h-5 text-ink" />
              </div>
              <h3 className="font-display text-2xl mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "var(--gradient-copper)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    { icon: Clock, title: "Quick to Respond", desc: "Calls answered, jobs scheduled fast — even when others won't pick up the phone." },
    { icon: MessageCircle, title: "Constant Communication", desc: "Photos & videos throughout the job, especially when you can't be home. You always know what's happening." },
    { icon: ShieldCheck, title: "Honest Pricing", desc: "Fair rates, no surprises at the end. Steve will save you money up front when he can." },
    { icon: Wrench, title: "Master Craftsmanship", desc: "Quality parts, clean job sites, and the experience to diagnose what others miss." },
  ];
  return (
    <section id="why" className="py-28 relative" style={{ background: "var(--gradient-radial)" }}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <div className="text-xs uppercase tracking-[0.3em] text-copper mb-4">Why Steve-O's</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">The plumber your neighbor keeps recommending.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Steve doesn't just fix pipes. He builds trust — one careful diagnosis, one honest conversation, one clean job site at a time. It's why customers stay customers for life.
          </p>
          <div className="mt-8 p-6 rounded-xl border border-border bg-card/60 backdrop-blur">
            <Quote className="w-6 h-6 text-copper mb-3" />
            <p className="italic leading-relaxed">"For as long as Steve-O remains in business, he will be the only plumber I call."</p>
            <div className="mt-3 text-sm text-muted-foreground">— Jeremy, longtime customer</div>
          </div>
        </div>

        <div className="space-y-px bg-border rounded-2xl overflow-hidden border border-border">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-8 flex gap-5">
              <div className="shrink-0 w-11 h-11 rounded-md border border-border flex items-center justify-center" style={{ background: "var(--gradient-copper)" }}>
                <Icon className="w-5 h-5 text-ink" />
              </div>
              <div>
                <h3 className="font-display text-xl mb-2">{title}</h3>
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
    <section id="about" className="py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl opacity-20 blur-2xl" style={{ background: "var(--gradient-copper)" }} />
            <img src={steveImg} alt="Steve, master plumber" loading="lazy" width={1024} height={1024} className="relative rounded-2xl border border-border w-full aspect-square object-cover" style={{ boxShadow: "var(--shadow-elegant)" }} />
            <div className="absolute -bottom-6 -right-6 px-5 py-4 rounded-xl border border-border bg-card backdrop-blur" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Founder</div>
              <div className="font-display text-xl">Steve-O</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs uppercase tracking-[0.3em] text-copper">Meet the Master</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">A decade of pipes, problems, and getting it right.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Steve built Steve-O's Plumbing on a simple promise: <span className="text-foreground italic">"Do it once, do it right, and everyone is happy."</span>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Over a decade of hands-on experience across plumbing, heating, and HVAC means complicated diagnoses get simpler — and your home gets back to normal faster. Steve picks up his own phone, runs his own jobs, and stands behind every weld, valve, and fitting.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            {[
              { k: "Owner-operated", v: "Direct line to Steve" },
              { k: "Locally trusted", v: "NH community favorite" },
              { k: "Fully equipped", v: "Right parts, first trip" },
            ].map((b) => (
              <div key={b.k} className="p-4 rounded-lg border border-border bg-card/40">
                <div className="font-medium">{b.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{b.v}</div>
              </div>
            ))}
          </div>
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
    { name: "April Aiken", text: "Our boiler died in the coldest snap of the season. He responded immediately with a quote and we hired him the next day. He moved his entire schedule to help us.", tag: "Emergency hero" },
  ];
  return (
    <section id="reviews" className="py-28" style={{ background: "var(--gradient-radial)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-copper mb-4">Voices of New Hampshire</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">93 five-star reviews. Zero compromises.</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-6 h-6 fill-copper-glow text-copper-glow" />)}</div>
            <div>
              <div className="font-display text-2xl">5.0</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Google Rated</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <article key={r.name} className="p-7 rounded-2xl border border-border bg-card/70 backdrop-blur flex flex-col gap-5 hover:border-copper/50 transition-colors duration-500">
              <div className="flex items-center justify-between">
                <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-copper-glow text-copper-glow" />)}</div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-copper px-2 py-1 rounded border border-copper/30">{r.tag}</span>
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
    <section id="contact" className="py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-border p-12 md:p-16 text-center" style={{ background: "var(--gradient-radial)", boxShadow: "var(--shadow-elegant)" }}>
          <div className="absolute inset-x-0 top-0 h-px" style={{ background: "var(--gradient-copper)" }} />
          <div className="text-xs uppercase tracking-[0.3em] text-copper mb-4">Ready when you are</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl mx-auto">
            Got a leak, a cold house, or a problem nobody else can solve?
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Steve picks up the phone. Call now for fast, honest service across New Hampshire.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={TEL} className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-md font-medium text-primary-foreground text-lg" style={{ background: "var(--gradient-copper)", boxShadow: "var(--shadow-copper)" }}>
              <Phone className="w-5 h-5" /> {PHONE}
            </a>
            <a href="sms:+16034776916" className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-md font-medium border border-border bg-card hover:bg-secondary transition text-lg">
              <MessageCircle className="w-5 h-5" /> Text Steve
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-copper" /> Open Mon–Sat · 8 AM</span>
            <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-copper" /> Serving New Hampshire</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-copper" /> Licensed · Insured</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: "var(--gradient-copper)" }}>
            <Wrench className="w-4 h-4 text-ink" />
          </div>
          <div>
            <div className="font-display text-lg">Steve-O's Plumbing</div>
            <div className="text-xs text-muted-foreground">Master plumbing & heating · NH</div>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Steve-O's Plumbing LLC. All rights reserved.
        </div>
        <div className="md:text-right">
          <a href={TEL} className="inline-flex items-center gap-2 text-copper hover:text-copper-glow transition">
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
        </div>
      </div>
    </footer>
  );
}
