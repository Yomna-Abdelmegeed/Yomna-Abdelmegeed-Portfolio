import { ArrowRight, MessageCircle, Code2, Sparkles, Heart } from "lucide-react";
import Button from "../components/Button";

const base = import.meta.env.BASE_URL;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 lg:pt-24"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-lavender/40 via-white to-sky/20" />
      <div className="pointer-events-none absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-sky/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-96 w-96 rounded-full bg-burgundy/10 blur-3xl" />

      <div className="section-container grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-flutter/30 bg-flutter/10 px-4 py-1.5 text-xs font-semibold text-navy">
            <Sparkles size={13} className="text-flutter" /> Flutter Developer
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="text-gradient">Yomna Abdelmegeed</span>
          </h1>

          <p className="mt-3 text-xl font-semibold text-burgundy sm:text-2xl">
            Flutter Developer
          </p>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-navy/70">
            Building scalable, responsive, and user-focused mobile and web
            applications with Flutter.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects" icon={ArrowRight}>
              View My Projects
            </Button>
            <Button href="#contact" variant="outline" icon={MessageCircle}>
              Let's Connect
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute inset-0 -z-10 animate-gradient rounded-full bg-gradient-to-tr from-lavender via-sky/60 to-burgundy/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl shadow-burgundy/20">
            <img
              src={`${base}images/yomna.png`}
              alt="Portrait of Yomna Abdelmegeed, Flutter Developer"
              className="h-full w-full object-cover"
            />
          </div>

          {/* floating decorative badges */}
          <div className="animate-float-slow absolute -left-6 top-8 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-lg">
            <Code2 size={16} className="text-flutter" />
            <span className="text-xs font-semibold text-navy">Clean Code</span>
          </div>

          <div className="animate-float absolute -right-4 top-1/3 flex items-center gap-2 rounded-2xl bg-flutter/95 px-4 py-2.5 text-white shadow-lg">
            <span className="text-xs font-bold">Flutter</span>
          </div>

          <div className="animate-float-delay absolute -bottom-4 left-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-lg">
            <Heart size={14} className="text-burgundy" />
            <span className="text-xs font-semibold text-navy">
              Mobile &amp; Web Developer
            </span>
          </div>

          <div className="absolute -bottom-2 right-2 h-16 w-16 animate-float-slow rounded-full bg-gradient-to-br from-gold/60 to-sky/40 blur-sm" />
        </div>
      </div>
    </section>
  );
}
