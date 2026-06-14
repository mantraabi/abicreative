"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { projects } from "@/data/projects";

// ==================== HOOKS ====================
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function Animate({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ==================== LOADING SCREEN ====================
function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setVisible(false);
            onDone();
          }, 300);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(timer);
  }, [onDone]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        background: "#1a0f05",
        opacity: progress >= 100 ? 0 : 1,
        transition: "opacity 0.4s ease",
      }}
    >
      <div className="text-[24px] font-bold tracking-tight mb-8" style={{ color: "#f8e9d1" }}>
        Abi<span className="ml-2 px-2 py-[2px] text-[10px] border align-super" style={{ borderColor: "rgba(248,233,209,0.3)", color: "#f8e9d1" }}>CREATIVE</span>
      </div>
      <div className="w-48 h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(248,233,209,0.1)" }}>
        <div
          className="h-full rounded-full transition-all duration-200"
          style={{
            width: `${Math.min(progress, 100)}%`,
            background: "linear-gradient(90deg, #be3f00, #cc8800)",
          }}
        />
      </div>
      <p className="mt-4 text-[12px] tracking-widest uppercase" style={{ color: "rgba(248,233,209,0.3)" }}>
        Loading
      </p>
    </div>
  );
}

// ==================== NAVBAR ====================
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Proyek", href: "#proyek" },
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f8e9d1]/95 backdrop-blur-sm border-b border-[#1a0f05]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 h-20 flex items-center justify-between">
        <a href="#" className="text-[20px] font-bold tracking-tight text-[#1a0f05]">
          Abi<span className="ml-2 px-2 py-[2px] text-[10px] border border-[#1a0f05] align-super">CREATIVE</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-[#1a0f05]/60 hover:text-[#1a0f05] transition-colors font-medium tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#1a0f05]">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#f8e9d1] border-t border-[#1a0f05]/10 px-8 py-6 space-y-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="block text-[14px] text-[#1a0f05]/60 hover:text-[#1a0f05] font-medium uppercase">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ==================== HERO ====================
function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-24 px-8 grid-bg relative overflow-hidden">
      <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full border border-[#1a0f05]/5 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 relative">
          <div className="vrail hidden lg:block" />
          <Animate>
            <span className="badge mb-7 inline-flex">Digital Solutions Agency</span>
          </Animate>
          <Animate delay={0.1}>
            <h1 className="text-[48px] sm:text-[60px] lg:text-[72px] font-bold leading-[0.95] tracking-tight mb-7">
              Membangun<br />produk digital<br /><span className="text-[#be3f00]">bermakna.</span>
            </h1>
          </Animate>
          <Animate delay={0.2}>
            <p className="text-[18px] text-[#8a7a6a] max-w-[480px] mb-10 leading-relaxed">
              Kami merancang solusi digital yang membantu bisnis dan pendidikan Indonesia tumbuh lebih cepat.
            </p>
          </Animate>
          <Animate delay={0.3}>
            <div className="flex flex-wrap gap-3">
              <a href="#proyek" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a0f05] text-[#f8e9d1] text-[14px] font-semibold tracking-wide uppercase hover:bg-[#2a1f15] transition-colors">
                Lihat Proyek
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </a>
              <a href="#kontak" className="inline-flex items-center gap-2 px-6 py-3 border border-[#1a0f05]/20 text-[#1a0f05] text-[14px] font-semibold tracking-wide uppercase hover:border-[#1a0f05]/40 transition-colors">
                Hubungi Kami
              </a>
            </div>
          </Animate>
        </div>

        <div className="lg:col-span-5">
          <Animate delay={0.4}>
            <div className="lg:pl-12 lg:border-l border-[#1a0f05]/10 space-y-8">
              {[
                { num: "2+", label: "Proyek Aktif" },
                { num: "10K+", label: "Pengguna" },
                { num: "99.9%", label: "Uptime" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[48px] font-bold tracking-tight text-[#1a0f05]">{s.num}</div>
                  <div className="text-[12px] text-[#8a7a6a] uppercase tracking-[1px] font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

// ==================== PROJECTS ====================
function Projects() {
  return (
    <section id="proyek" className="section-dark py-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        <Animate>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-9 h-9 flex items-center justify-center border border-[#f8e9d1]/20 text-[18px] font-bold">01</div>
            <span className="text-[11px] uppercase tracking-[0.6px] font-semibold text-[#f8e9d1]/50">Portfolio</span>
            <div className="flex-1 h-px bg-[#f8e9d1]/10" />
          </div>
        </Animate>
        <Animate>
          <h2 className="text-[36px] sm:text-[48px] font-bold tracking-tight mb-16 leading-tight">
            Proyek yang sudah<br />kami <span className="text-[#be3f00]">bangun.</span>
          </h2>
        </Animate>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Animate key={p.name} delay={i * 0.15}>
              <a href={p.url} target="_blank" rel="noopener noreferrer"
                className="group relative p-8 border border-[#f8e9d1]/10 hover:border-[#f8e9d1]/25 transition-all duration-300 block h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{p.icon}</span>
                    <div>
                      <h3 className="text-[20px] font-bold tracking-tight">{p.name}</h3>
                      <p className="text-[12px] text-[#f8e9d1]/40 uppercase tracking-wider">{p.tagline}</p>
                    </div>
                  </div>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"
                    className="text-[#f8e9d1]/30 group-hover:text-[#f8e9d1] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                    <path d="M5 15L15 5M15 5H7M15 5v8" />
                  </svg>
                </div>
                <p className="text-[14px] text-[#f8e9d1]/50 leading-relaxed mb-8">{p.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-[13px] text-[#f8e9d1]/60">
                      <span className="text-[10px]" style={{ color: p.accent }}>●</span>{f}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-[11px] font-medium uppercase tracking-wider border border-[#f8e9d1]/10 text-[#f8e9d1]/40">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== ABOUT ====================
function About() {
  return (
    <section id="tentang" className="py-24 px-8 bg-[#fff6e0]">
      <div className="max-w-[1200px] mx-auto">
        <Animate>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-9 h-9 flex items-center justify-center border border-[#1a0f05]/15 text-[18px] font-bold">02</div>
            <span className="text-[11px] uppercase tracking-[0.6px] font-semibold text-[#8a7a6a]">Tentang</span>
            <div className="flex-1 h-px bg-[#1a0f05]/10" />
          </div>
        </Animate>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Animate>
              <h2 className="text-[36px] sm:text-[48px] font-bold tracking-tight mb-8 leading-tight">
                Siapa di balik<br /><span className="text-[#be3f00]">Abi Creative?</span>
              </h2>
            </Animate>
            <Animate delay={0.1}>
              <p className="text-[16px] text-[#8a7a6a] leading-relaxed mb-6">
                Abi Creative adalah studio digital yang berfokus pada pembuatan produk digital bermakna. Kami percaya teknologi harus bisa diakses oleh semua orang.
              </p>
              <p className="text-[16px] text-[#8a7a6a] leading-relaxed mb-10">
                Dari AI copywriting untuk pedagang kecil hingga platform generate soal untuk guru. Setiap proyek kami dimulai dari masalah nyata.
              </p>
            </Animate>
            <Animate delay={0.2}>
              <div className="space-y-5">
                {[
                  { icon: "◎", title: "Fokus pada Masalah Nyata", desc: "Setiap produk lahir dari kebutuhan yang valid" },
                  { icon: "◎", title: "Teknologi Modern", desc: "Next.js, AI, dan infrastruktur cloud terkini" },
                  { icon: "◎", title: "Untuk Indonesia", desc: "Dirancang khusus untuk pasar dan budaya lokal" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-[#be3f00] text-[18px] mt-[2px]">{item.icon}</span>
                    <div>
                      <h4 className="text-[15px] font-bold mb-1">{item.title}</h4>
                      <p className="text-[14px] text-[#8a7a6a]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Animate>
          </div>

          <Animate delay={0.15}>
            <div className="lg:pl-12 lg:border-l border-[#1a0f05]/10">
              <div className="mb-8">
                <span className="text-[11px] uppercase tracking-[0.6px] font-semibold text-[#8a7a6a]">Mission</span>
                <h3 className="text-[28px] font-bold mt-2 mb-4 tracking-tight">
                  Memberdayakan 1 juta UMKM<br />di Indonesia.
                </h3>
                <p className="text-[14px] text-[#8a7a6a] leading-relaxed">dengan teknologi yang mudah digunakan dan terjangkau.</p>
              </div>
              <div className="divider mb-8" />
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "Founded", value: "2025" },
                  { label: "Proyek", value: "2+" },
                  { label: "Pengguna", value: "10K+" },
                  { label: "Uptime", value: "99.9%" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-[32px] font-bold tracking-tight">{s.value}</div>
                    <div className="text-[11px] text-[#8a7a6a] uppercase tracking-[1px] font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

// ==================== SERVICES ====================
function Services() {
  const services = [
    { num: "01", title: "Web Development", desc: "Website dan web app modern dengan performa tinggi, responsive, dan SEO-friendly." },
    { num: "02", title: "AI Integration", desc: "Integrasi AI ke produk Anda: copywriting, chatbot, analisis data, dan automasi." },
    { num: "03", title: "SaaS Development", desc: "Platform SaaS lengkap dengan auth, payment gateway, dan dashboard analytics." },
    { num: "04", title: "UI/UX Design", desc: "Desain interface yang intuitif dan estetis untuk pengalaman pengguna terbaik." },
    { num: "05", title: "Cloud & DevOps", desc: "Deploy, monitoring, dan infrastruktur cloud yang scalable dan andal." },
    { num: "06", title: "Data & Analytics", desc: "Dashboard dan laporan data untuk membantu keputusan bisnis yang lebih baik." },
  ];

  return (
    <section id="layanan" className="section-dark py-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        <Animate>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-9 h-9 flex items-center justify-center border border-[#f8e9d1]/20 text-[18px] font-bold">03</div>
            <span className="text-[11px] uppercase tracking-[0.6px] font-semibold text-[#f8e9d1]/50">Layanan</span>
            <div className="flex-1 h-px bg-[#f8e9d1]/10" />
          </div>
        </Animate>
        <Animate>
          <h2 className="text-[36px] sm:text-[48px] font-bold tracking-tight mb-16 leading-tight">
            Apa yang bisa<br />kami <span className="text-[#cc8800]">lakukan.</span>
          </h2>
        </Animate>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#f8e9d1]/10">
          {services.map((s, i) => (
            <Animate key={s.num} delay={i * 0.08}>
              <div className="bg-[#1a0f05] p-8 hover:bg-[#1a0f05]/80 transition-colors group h-full">
                <span className="text-[11px] text-[#f8e9d1]/30 font-mono font-bold">{s.num}</span>
                <h3 className="text-[18px] font-bold mt-3 mb-3 tracking-tight group-hover:text-[#be3f00] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[13px] text-[#f8e9d1]/40 leading-relaxed">{s.desc}</p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== TESTIMONIALS ====================
function Testimonials() {
  const testimonials = [
    {
      name: "UMKM Owner",
      role: "Pedagang Online",
      quote: "Tulisin sangat membantu saya membuat caption jualan. Dulu butuh 30 menit, sekarang cuma sekali klik!",
      avatar: "👩‍💼",
    },
    {
      name: "Guru Matematika",
      role: "SMP Negeri Surakarta",
      quote: "SoalKu mempermurah waktu saya membuat soal ujian. Fitur bank soalnya sangat praktis untuk persiapan PTS.",
      avatar: "👨‍🏫",
    },
    {
      name: "Startup Founder",
      role: "Tech Enthusiast",
      quote: "Abi Creative membantu kami membangun MVP dalam waktu singkat. Kualitas kodenya bersih dan mudah di-maintain.",
      avatar: "🧑‍💻",
    },
  ];

  return (
    <section id="testimoni" className="py-24 px-8 bg-[#fff6e0]">
      <div className="max-w-[1200px] mx-auto">
        <Animate>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-9 h-9 flex items-center justify-center border border-[#1a0f05]/15 text-[18px] font-bold">05</div>
            <span className="text-[11px] uppercase tracking-[0.6px] font-semibold text-[#8a7a6a]">Testimoni</span>
            <div className="flex-1 h-px bg-[#1a0f05]/10" />
          </div>
        </Animate>
        <Animate>
          <h2 className="text-[36px] sm:text-[48px] font-bold tracking-tight mb-16 leading-tight">
            Apa kata<br /><span className="text-[#be3f00]">mereka?</span>
          </h2>
        </Animate>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Animate key={t.name} delay={i * 0.12}>
              <div className="p-8 border border-[#1a0f05]/10 hover:border-[#1a0f05]/20 transition-colors h-full flex flex-col">
                <div className="text-[32px] mb-4">{t.avatar}</div>
                <p className="text-[15px] text-[#8a7a6a] leading-relaxed mb-6 flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="divider mb-4" />
                <div>
                  <p className="text-[14px] font-bold">{t.name}</p>
                  <p className="text-[12px] text-[#8a7a6a]">{t.role}</p>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CONTACT ====================
function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  return (
    <section id="kontak" className="py-24 px-8 bg-[#fff6e0]">
      <div className="max-w-[1200px] mx-auto">
        <Animate>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-9 h-9 flex items-center justify-center border border-[#1a0f05]/15 text-[18px] font-bold">06</div>
            <span className="text-[11px] uppercase tracking-[0.6px] font-semibold text-[#8a7a6a]">Kontak</span>
            <div className="flex-1 h-px bg-[#1a0f05]/10" />
          </div>
        </Animate>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Animate>
              <h2 className="text-[36px] sm:text-[48px] font-bold tracking-tight mb-6 leading-tight">
                Mari<br /><span className="text-[#be3f00]">berdiskusi.</span>
              </h2>
            </Animate>
            <Animate delay={0.1}>
              <p className="text-[16px] text-[#8a7a6a] leading-relaxed mb-10">
                Punya ide proyek atau butuh konsultasi? Jangan ragu untuk menghubungi kami.
              </p>
              <div className="space-y-4 text-[14px]">
                <div className="flex gap-3">
                  <span className="text-[#be3f00]">◎</span>
                  <div>
                    <span className="font-semibold">Lokasi</span>
                    <p className="text-[#8a7a6a]">Karanganyar, Jawa Tengah, Indonesia</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#be3f00]">◎</span>
                  <div>
                    <span className="font-semibold">Email</span>
                    <p className="text-[#8a7a6a]">hello@abicreative.id</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1a0f05]/10">
                <p className="text-[11px] uppercase tracking-wider font-semibold text-[#8a7a6a] mb-4">Ikuti Kami</p>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/abicreativelabs/" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#1a0f05]/15 text-[13px] font-medium text-[#1a0f05] hover:border-[#be3f00] hover:text-[#be3f00] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="5"/>
                      <circle cx="17.5" cy="6.5" r="1.5"/>
                    </svg>
                    Instagram
                  </a>
                  <a href="https://www.threads.com/@abicreativelabs" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#1a0f05]/15 text-[13px] font-medium text-[#1a0f05] hover:border-[#be3f00] hover:text-[#be3f00] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                      <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4"/>
                    </svg>
                    Threads
                  </a>
                </div>
              </div>
            </Animate>
          </div>

          <Animate delay={0.15}>
            {status === "sent" ? (
              <div className="text-center py-16 border border-[#1a0f05]/10">
                <div className="text-[48px] mb-4">✓</div>
                <h3 className="text-[20px] font-bold mb-2">Pesan Terkirim!</h3>
                <p className="text-[14px] text-[#8a7a6a]">Kami akan membalas dalam 1×24 jam.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#8a7a6a] mb-2">Nama</label>
                    <input type="text" placeholder="Nama Anda"
                      className="w-full px-4 py-3 bg-transparent border border-[#1a0f05]/15 text-[#1a0f05] placeholder:text-[#8a7a6a]/50 focus:outline-none focus:border-[#be3f00] transition-colors text-[14px]" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#8a7a6a] mb-2">Email</label>
                    <input type="email" placeholder="email@domain.com"
                      className="w-full px-4 py-3 bg-transparent border border-[#1a0f05]/15 text-[#1a0f05] placeholder:text-[#8a7a6a]/50 focus:outline-none focus:border-[#be3f00] transition-colors text-[14px]" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#8a7a6a] mb-2">Pesan</label>
                  <textarea rows={5} placeholder="Ceritakan proyek atau kebutuhan Anda..."
                    className="w-full px-4 py-3 bg-transparent border border-[#1a0f05]/15 text-[#1a0f05] placeholder:text-[#8a7a6a]/50 focus:outline-none focus:border-[#be3f00] transition-colors text-[14px] resize-none" />
                </div>
                <button type="button" onClick={() => setStatus("sending")}
                  className="w-full py-3.5 bg-[#1a0f05] text-[#f8e9d1] text-[14px] font-semibold tracking-wide uppercase hover:bg-[#2a1f15] transition-colors">
                  Kirim Pesan
                </button>
              </div>
            )}
          </Animate>
        </div>
      </div>
    </section>
  );
}

// ==================== FOOTER ====================
function Footer() {
  return (
    <footer className="section-dark py-16 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-[20px] font-bold tracking-tight mb-4">
              Abi<span className="ml-2 px-2 py-[2px] text-[10px] border border-[#f8e9d1]/30 align-super">CREATIVE</span>
            </div>
            <p className="text-[14px] text-[#f8e9d1]/40 leading-relaxed max-w-[280px]">
              Membangun produk digital yang bermakna untuk Indonesia.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[1px] font-semibold text-[#f8e9d1]/50 mb-4">Proyek</h4>
            <div className="space-y-3">
              <a href="https://www.tulisin.my.id" target="_blank" rel="noopener noreferrer"
                className="block text-[14px] text-[#f8e9d1]/40 hover:text-[#f8e9d1] transition-colors">Tulisin</a>
              <a href="https://soalku.vercel.app" target="_blank" rel="noopener noreferrer"
                className="block text-[14px] text-[#f8e9d1]/40 hover:text-[#f8e9d1] transition-colors">SoalKu</a>
            </div>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[1px] font-semibold text-[#f8e9d1]/50 mb-4">Legal</h4>
            <div className="space-y-3">
              <a href="/privacy" className="block text-[14px] text-[#f8e9d1]/40 hover:text-[#f8e9d1] transition-colors">Privacy Policy</a>
              <a href="/terms" className="block text-[14px] text-[#f8e9d1]/40 hover:text-[#f8e9d1] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#f8e9d1]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#f8e9d1]/30">
            © {new Date().getFullYear()} Abi Creative. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/mantraabi" target="_blank" rel="noopener noreferrer"
              className="text-[12px] text-[#f8e9d1]/30 hover:text-[#f8e9d1] transition-colors uppercase tracking-wider">GitHub</a>
            <a href="https://www.tulisin.my.id" target="_blank" rel="noopener noreferrer"
              className="text-[12px] text-[#f8e9d1]/30 hover:text-[#f8e9d1] transition-colors uppercase tracking-wider">Tulisin</a>
            <a href="https://soalku.vercel.app" target="_blank" rel="noopener noreferrer"
              className="text-[12px] text-[#f8e9d1]/30 hover:text-[#f8e9d1] transition-colors uppercase tracking-wider">SoalKu</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==================== PAGE ====================
export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <main style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}>
        <Navbar />
        <Hero />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Services />
        <div className="divider" />
        <Testimonials />
        <div className="divider" />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
