import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Abi Creative",
  description: "Syarat dan ketentuan penggunaan layanan Abi Creative.",
};

export default function TermsPage() {
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
        <h1 className="text-[36px] font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-[14px] text-[#8a7a6a] mb-12">Terakhir diperbarui: 14 Juni 2026</p>

        <div className="space-y-8 text-[15px] text-[#8a7a6a] leading-relaxed">
          <section>
            <h2 className="text-[20px] font-bold text-[#1a0f05] mb-3">1. Penerimaan Syarat</h2>
            <p>
              Dengan mengakses dan menggunakan website ini, Anda menyetujui syarat dan ketentuan yang
              berlaku. Jika Anda tidak setuju, harap hentikan penggunaan website ini.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a0f05] mb-3">2. Penggunaan Layanan</h2>
            <p>Anda setuju untuk:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Menggunakan layanan sesuai dengan hukum yang berlaku</li>
              <li>Tidak menyalahgunakan atau merusak infrastruktur kami</li>
              <li>Tidak menggunakan layanan untuk aktivitas ilegal</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a0f05] mb-3">3. Hak Kekayaan Intelektual</h2>
            <p>
              Seluruh konten di website ini, termasuk teks, grafik, logo, dan kode, adalah milik
              Abi Creative dan dilindungi oleh hukum kekayaan intelektual.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a0f05] mb-3">4. Batasan Tanggung Jawab</h2>
            <p>
              Layanan disediakan &ldquo;sebagaimana adanya&rdquo; tanpa jaminan apa pun. Kami tidak bertanggung
              jawab atas kerugian langsung maupun tidak langsung yang timbul dari penggunaan layanan.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a0f05] mb-3">5. Tautan Pihak Ketiga</h2>
            <p>
              Website ini mungkin berisi tautan ke situs pihak ketiga. Kami tidak bertanggung jawab
              atas konten atau praktik privasi situs tersebut.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a0f05] mb-3">6. Perubahan Ketentuan</h2>
            <p>
              Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan berlaku sejak
              dipublikasikan di halaman ini.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a0f05] mb-3">7. Kontak</h2>
            <p>
              Untuk pertanyaan terkait syarat dan ketentuan, hubungi kami di hello@abicreative.web.id.
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
