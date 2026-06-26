export interface Project {
  name: string;
  url: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  icon: string;
  accent: string;
}

export const projects: Project[] = [
  {
      name: "Tulisin",
      url: "https://www.tulisin.my.id",
      tagline: "AI Copywriting untuk UMKM",
      description:
        "Platform AI yang membantu pelaku UMKM membuat caption jualan, deskripsi produk, dan konten marketing dalam hitungan detik. Fitur AI Vision untuk generate copy dari foto produk.",
      tech: ["Next.js", "Turso", "Pakasir", "AI Vision"],
      features: ["AI Copywriting", "AI Vision", "Payment Gateway (QRIS + VA)", "Template Library", "Brand Voice"],
      icon: "✍️",
      accent: "#be3f00",
    },
  {
    name: "SoalKu",
    url: "https://soalku.vercel.app",
    tagline: "Platform Generate Soal untuk Guru",
    description:
      "Solusi cerdas untuk guru dan sekolah dalam membuat soal ujian, kuis, dan bank soal dengan dukungan AI.",
    tech: ["Next.js 15", "Turso", "Payment Gateway", "NextAuth"],
    features: ["Generate Soal AI", "Bank Soal", "Quiz Online", "Sekolah Mode"],
    icon: "📝",
    accent: "#cc8800",
  },
  {
    name: "CBT Sekolah",
    url: "https://github.com/mantraabi/cbt-sekolah",
    tagline: "Ujian Online untuk Sekolah",
    description:
      "Sistem Computer Based Test (CBT) untuk sekolah. Mendukung ujian pilihan ganda, esai, PG kompleks, dan menjodohkan. Dilengkapi monitoring real-time, anti-cheat, dan sistem lisensi.",
    tech: ["Express.js", "Vue 3", "MySQL", "Socket.IO", "Tailwind"],
    features: ["Multi Tipe Soal", "Monitoring Real-time", "Anti-Cheat", "Sistem Lisensi", "Export Excel", "Koreksi Otomatis"],
    icon: "🏫",
    accent: "#2563eb",
  },
  // Tambah proyek baru di sini
  // {
  //   name: "ProyekBaru",
  //   url: "https://link-proyek.com",
  //   tagline: "Tagline singkat",
  //   description: "Deskripsi proyek.",
  //   tech: ["Next.js"],
  //   features: ["Fitur 1", "Fitur 2", "Fitur 3", "Fitur 4"],
  //   icon: "🚀",
  //   accent: "#be3f00",
  // },
];
