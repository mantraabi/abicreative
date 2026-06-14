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
      "Platform AI yang membantu pelaku UMKM membuat caption jualan, deskripsi produk, dan konten marketing dalam hitungan detik.",
    tech: ["Next.js", "Turso", "Duitku", "Vercel"],
    features: ["AI Copywriting", "Export Multi-Format", "Payment Gateway", "Template Library"],
    icon: "✍️",
    accent: "#be3f00",
  },
  {
    name: "SoalKu",
    url: "https://soalku.vercel.app",
    tagline: "Platform Generate Soal untuk Guru",
    description:
      "Solusi cerdas untuk guru dan sekolah dalam membuat soal ujian, kuis, dan bank soal dengan dukungan AI.",
    tech: ["Next.js 15", "Turso", "Duitku", "NextAuth"],
    features: ["Generate Soal AI", "Bank Soal", "Quiz Online", "Sekolah Mode"],
    icon: "📝",
    accent: "#cc8800",
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
