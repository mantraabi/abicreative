import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Abi Creative",
  description: "Kebijakan privasi Abi Creative.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#f8e9d1] min-h-screen">
      <nav className="border-b border-[#1a0f05]/10">
        <div className="max-w-[1200px] mx-auto px-8 h-20 flex items-center">
          <Link href="/" className="text-[20px] font-bold tracking-tight text-[#1a0f05]">
            Abi<span className="ml-2 px-2 py-[2px] text-[10px] border border-[#1a0f05] align-super">CREATIVE</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-[800px] mx-auto px-8 py-16">
        <h1 className="text-[36px] font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-[14px] text-[#8a7a6a] mb-12">Terakhir diperbarui: 14 Juni 2026</p>

        <div className="space-y-8 text-[15px] text-[#8a7a6a] leading-relaxed">
          <section>
            <h2 className="text-[20px] font-bold text-[#1a0f05] mb-3">1. Informasi yang Kami Kumpulkan</h2>
            <p>
              Kami mengumpulkan informasi yang Anda berikan secara langsung, seperti nama, email, dan pesan
              saat Anda menghubungi kami melalui formulir kontak. Kami juga mengumpulkan data penggunaan
              anonim seperti halaman yang dikunjungi dan durasi kunjungan.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a0f05] mb-3">2. Penggunaan Informasi</h2>
            <p>Informasi yang kami kumpulkan digunakan untuk:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Merespons pertanyaan dan permintaan Anda</li>
              <li>Meningkatkan kualitas website dan layanan kami</li>
              <li>Mengirimkan informasi terkait layanan (dengan persetujuan Anda)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a0f05] mb-3">3. Keamanan Data</h2>
            <p>
              Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda
              dari akses, pengubahan, atau penghapusan yang tidak sah.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a0f05] mb-3">4. Cookie</h2>
            <p>
              Website ini dapat menggunakan cookie untuk meningkatkan pengalaman pengguna. Anda dapat
              mengatur browser untuk menolak cookie, namun beberapa fitur mungkin tidak berjalan dengan baik.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a0f05] mb-3">5. Hak Anda</h2>
            <p>
              Anda berhak untuk mengakses, memperbarui, atau menghapus data pribadi Anda. Hubungi kami
              di hello@abicreative.web.id untuk permintaan terkait data Anda.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a0f05] mb-3">6. Perubahan Kebijakan</h2>
            <p>
              Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan dipublikasikan
              di halaman ini dengan tanggal pembaruan terbaru.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1a0f05]/10">
          <Link href="/" className="text-[14px] text-[#be3f00] hover:underline">← Kembali ke Beranda</Link>
        </div>
      </div>
    </main>
  );
}
