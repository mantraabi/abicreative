import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getAllSlugs } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} - Blog Abi Creative`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.abicreative.web.id/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Abi Creative",
    },
    publisher: {
      "@type": "Organization",
      name: "Abi Creative",
      url: "https://www.abicreative.web.id",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.abicreative.web.id/blog/${slug}`,
    },
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top nav */}
      <div
        className="sticky top-0 z-40 backdrop-blur-md border-b"
        style={{
          background: "rgba(248,233,209,0.9)",
          borderColor: "rgba(26,15,5,0.1)",
        }}
      >
        <div className="max-w-[800px] mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/blog"
            className="text-[13px] font-medium flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{ color: "rgba(26,15,5,0.5)" }}
          >
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 11L5 7l4-4" />
            </svg>
            Semua Artikel
          </Link>
          <Link
            href="/"
            className="text-[14px] font-bold tracking-tight"
            style={{ color: "#1a0f05" }}
          >
            Abi
            <span
              className="ml-1 px-1.5 py-[1px] text-[9px] border align-super"
              style={{ borderColor: "rgba(26,15,5,0.3)" }}
            >
              CREATIVE
            </span>
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-[800px] mx-auto px-6 py-12">
        {/* Meta */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide ${
                categoryColors[post.category] || categoryColors.Umum
              }`}
            >
              {post.category}
            </span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(26,15,5,0.4)" }}
            >
              {new Date(post.date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span
              className="text-[13px]"
              style={{ color: "rgba(26,15,5,0.3)" }}
            >
              {post.readTime} baca
            </span>
          </div>

          <h1
            className="text-[32px] sm:text-[40px] font-bold leading-tight tracking-tight mb-4"
            style={{ color: "#1a0f05" }}
          >
            {post.title}
          </h1>

          <p
            className="text-[16px] leading-relaxed"
            style={{ color: "rgba(26,15,5,0.55)" }}
          >
            {post.description}
          </p>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-10"
          style={{ background: "rgba(26,15,5,0.1)" }}
        />

        {/* Content */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* CTA Box */}
        <div
          className="mt-12 rounded-2xl border p-8 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(190,63,0,0.04), rgba(204,136,0,0.04))",
            borderColor: "rgba(26,15,5,0.08)",
          }}
        >
          <p className="text-[14px] font-semibold mb-2" style={{ color: "#1a0f05" }}>
            Butuh solusi digital untuk bisnis atau sekolah Anda?
          </p>
          <p
            className="text-[13px] mb-5"
            style={{ color: "rgba(26,15,5,0.5)" }}
          >
            Abi Creative siap membantu membangun produk digital yang bermakna.
          </p>
          <Link
            href="/#kontak"
            className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-semibold text-white rounded-full hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(135deg, #be3f00, #cc8800)" }}
          >
            Hubungi Kami
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section
          className="border-t py-12"
          style={{ borderColor: "rgba(26,15,5,0.1)" }}
        >
          <div className="max-w-[800px] mx-auto px-6">
            <h2
              className="text-[20px] font-bold mb-6"
              style={{ color: "#1a0f05" }}
            >
              Artikel Terkait
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group block rounded-xl border bg-white/50 p-5 hover-lift"
                  style={{ borderColor: "rgba(26,15,5,0.08)" }}
                >
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide ${
                      categoryColors[rp.category] || categoryColors.Umum
                    }`}
                  >
                    {rp.category}
                  </span>
                  <h3 className="text-[15px] font-bold mt-2 leading-snug group-hover:text-[#be3f00] transition-colors">
                    {rp.title}
                  </h3>
                  <p
                    className="text-[12px] mt-1 line-clamp-2"
                    style={{ color: "rgba(26,15,5,0.4)" }}
                  >
                    {rp.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
