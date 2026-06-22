import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - Abi Creative | Tips Digital, Teknologi & UMKM Indonesia",
  description:
    "Artikel seputar teknologi digital, tips UMKM, pengembangan web, AI, dan transformasi digital untuk bisnis Indonesia.",
  openGraph: {
    title: "Blog Abi Creative",
    description:
      "Artikel seputar teknologi digital, tips UMKM, pengembangan web, AI, dan transformasi digital.",
    url: "https://www.abicreative.web.id/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const categoryColors: Record<string, string> = {
    CBT: "bg-blue-100 text-blue-700",
    Soal: "bg-purple-100 text-purple-700",
    UMKM: "bg-green-100 text-green-700",
    Web: "bg-orange-100 text-orange-700",
    AI: "bg-pink-100 text-pink-700",
    Umum: "bg-gray-100 text-gray-700",
  };

  return (
    <main className="min-h-screen" style={{ background: "#f8e9d1" }}>
      {/* Header */}
      <div className="border-b" style={{ borderColor: "rgba(26,15,5,0.1)" }}>
        <div className="max-w-[1200px] mx-auto px-8 py-12">
          <Link
            href="/"
            className="text-[14px] font-medium mb-6 inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{ color: "rgba(26,15,5,0.5)" }}
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10 12L6 8l4-4" />
            </svg>
            Kembali
          </Link>
          <h1 className="text-[40px] sm:text-[52px] font-bold tracking-tight leading-tight">
            Blog
          </h1>
          <p
            className="text-[16px] mt-3 max-w-[600px]"
            style={{ color: "rgba(26,15,5,0.5)" }}
          >
            Artikel seputar teknologi digital, tips UMKM, pendidikan, dan
            transformasi digital untuk Indonesia.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        {posts.length === 0 ? (
          <p className="text-center py-20" style={{ color: "rgba(26,15,5,0.4)" }}>
            Belum ada artikel.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border bg-white/50 overflow-hidden hover-lift"
                style={{ borderColor: "rgba(26,15,5,0.08)" }}
              >
                {/* Image placeholder */}
                <div
                  className="h-48 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(190,63,0,0.08), rgba(204,136,0,0.08))",
                  }}
                >
                  <span className="text-[48px]">
                    {post.category === "CBT"
                      ? "🏫"
                      : post.category === "Soal"
                      ? "📝"
                      : post.category === "UMKM"
                      ? "💡"
                      : post.category === "Web"
                      ? "🌐"
                      : "📄"}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide ${
                        categoryColors[post.category] || categoryColors.Umum
                      }`}
                    >
                      {post.category}
                    </span>
                    <span
                      className="text-[12px]"
                      style={{ color: "rgba(26,15,5,0.4)" }}
                    >
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-[18px] font-bold leading-snug mb-2 group-hover:text-[#be3f00] transition-colors">
                    {post.title}
                  </h2>

                  <p
                    className="text-[13px] leading-relaxed line-clamp-3"
                    style={{ color: "rgba(26,15,5,0.5)" }}
                  >
                    {post.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span
                      className="text-[12px]"
                      style={{ color: "rgba(26,15,5,0.35)" }}
                    >
                      {new Date(post.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span
                      className="text-[12px] font-semibold group-hover:text-[#be3f00] transition-colors"
                      style={{ color: "rgba(26,15,5,0.4)" }}
                    >
                      Baca
                      <svg
                        className="inline ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer
        className="border-t py-10 text-center"
        style={{ borderColor: "rgba(26,15,5,0.1)" }}
      >
        <p className="text-[13px]" style={{ color: "rgba(26,15,5,0.4)" }}>
          &copy; {new Date().getFullYear()} Abi Creative. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
