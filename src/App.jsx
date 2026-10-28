import React, { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Eye,
  HeartHandshake,
  Landmark,
  QrCode,
  ScanLine,
  Sparkles,
  Play,
  ExternalLink,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QRPanel from "./components/QRPanel";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function usePageTitle(title) {
  useEffect(() => {
    document.title = "WONGKLIK";
  }, []);
}

const journey = [
  {
    icon: ScanLine,
    title: "Pindai QR",
    text: "Arahkan kamera ponsel ke QR pada gantungan kunci.",
  },
  {
    icon: BookOpen,
    title: "Kenali Wayang Wong",
    text: "Baca pengantar tentang kisah, topeng, dan pementasan dari Tejakula.",
  },
  {
    icon: HeartHandshake,
    title: "Jaga rasa hormat",
    text: "Kenali budaya bersama konteks dan masyarakat yang merawatnya.",
  },
];

function Home() {
  usePageTitle("");
  return (
    <main id="main">
      <section className="hero home-hero">
        <div className="hero-grain" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="eyebrow-dot" /> Gantungan kunci budaya ·
              Tejakula, Bali
            </span>
            <h1>
              Gantungan kecil.
              <br />
              <span>Cerita yang besar.</span>
            </h1>
            <p>
              Kenali Wayang Wong Tejakula dari benda yang selalu dekat. Pindai
              QR di gantungan kunci WONGKLIK untuk membuka pintu menuju kisah
              dan warisan di baliknya.
            </p>
            <div className="hero-actions">
              <Link to="/wayang-wong-tejakula" className="button button-gold">
                Mulai mengenal <ArrowRight size={17} />
              </Link>
              <a href="#cara-kerja" className="button button-outline-light">
                Lihat cara kerjanya <ArrowDown size={16} />
              </a>
            </div>
            <div className="hero-caption">
              <span className="caption-line" /> Sebuah cara baru untuk mendekat,
              dengan hormat pada tradisi.
            </div>
          </div>
          <div className="hero-art-wrap">
            <div className="hero-photo-frame">
              <img
                src={`${import.meta.env.BASE_URL}images/wayang-wong-hero.webp`}
                alt="Seorang anak mengamati topeng Wayang Wong Tejakula yang digantung"
              />
              <div className="photo-label">
                <span className="photo-label-mark">W</span>
                <span>
                  <strong>Wayang Wong Tejakula</strong>
                  <small>
                    <a
                      href="https://commons.wikimedia.org/wiki/File:Wayang_wong_Tejakula.jpg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Foto: Imadedana · Wikimedia Commons
                    </a>{" "}
                    ·{" "}
                    <a
                      href="https://creativecommons.org/licenses/by-sa/4.0/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CC BY-SA 4.0
                    </a>
                  </small>
                </span>
              </div>
            </div>
            <div
              className="hero-stamp"
              aria-label="Cerita budaya dalam genggaman"
            >
              <span>W</span>
              <small>
                CERITA
                <br />
                DALAM
                <br />
                GENGGAMAN
              </small>
            </div>
            <span className="art-note">
              Seni yang hidup
              <br />
              dari generasi ke generasi
            </span>
          </div>
        </div>
      </section>

      <section className="intro section" id="tentang">
        <div className="container intro-grid">
          <div className="intro-title">
            <span className="eyebrow">Kenalan dengan WONGKLIK</span>
            <h2>Kenangan budaya yang ikut ke mana-mana.</h2>
          </div>
          <div className="intro-copy">
            <p>
              WONGKLIK mengubah gantungan kunci menjadi awal dari rasa ingin
              tahu. Ilustrasi karakter Wayang Wong Tejakula pada aksesori
              mengajakmu mengenal sebuah seni pertunjukan bertopeng yang tumbuh
              bersama masyarakatnya.
            </p>
            <p>
              Pindai QR-nya untuk membaca pengantar tentang kesenian ini, lalu
              lanjutkan perjalananmu dengan lebih memahami konteksnya.
            </p>
            <Link to="/wayang-wong-tejakula" className="text-link">
              Kenali Wayang Wong Tejakula <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="product-section section section-tint">
        <div className="container product-grid">
          <div
            className="product-display"
            aria-label="Ilustrasi konseptual gantungan kunci WONGKLIK"
          >
            <div className="product-orbit orbit-one" />
            <div className="product-orbit orbit-two" />
            <div className="keychain-ring">
              <span />
            </div>
            <div className="keychain-body">
              <span className="keychain-flower">✳</span>
              <span className="keychain-word">
                WONG
                <br />
                KLIK
              </span>
              <span className="keychain-label">CERITA DI BALIK WAYANG</span>
              <span className="keychain-qr">
                <QrCode size={31} strokeWidth={1.5} />
              </span>
            </div>
            <span className="product-note note-top">ilustrasi karakter</span>
            <span className="product-note note-bottom">
              pindai untuk mengenal
            </span>
          </div>
          <div className="product-copy">
            <span className="eyebrow">Bukan sekadar aksesori</span>
            <h2>
              Kenakan ceritanya.
              <br />
              <em>Buka dunianya.</em>
            </h2>
            <p>
              Setiap gantungan kunci dirancang sebagai pengingat kecil akan
              Wayang Wong Tejakula. QR code menjadi jalan menuju informasi
              budaya yang bisa dibaca kapan saja.
            </p>
            <div className="feature-list">
              <div>
                <span className="feature-icon">
                  <Sparkles size={18} />
                </span>
                <span>
                  <strong>Terinspirasi dari tradisi</strong>
                  <small>Ilustrasi karakter Wayang Wong Tejakula.</small>
                </span>
              </div>
              <div>
                <span className="feature-icon">
                  <QrCode size={18} />
                </span>
                <span>
                  <strong>Terhubung lewat QR</strong>
                  <small>Akses mudah ke cerita dan konteks budaya.</small>
                </span>
              </div>
              <div>
                <span className="feature-icon">
                  <Eye size={18} />
                </span>
                <span>
                  <strong>Dibuat untuk ingin tahu</strong>
                  <small>Awal percakapan tentang warisan yang hidup.</small>
                </span>
              </div>
            </div>
            <Link to="/wayang-wong-tejakula" className="button button-dark">
              Jelajahi ceritanya <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section journey-section" id="cara-kerja">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Sederhana untuk dimulai</span>
              <h2>
                Dari gantungan kunci
                <br />
                menuju cerita.
              </h2>
            </div>
            <p className="section-intro">
              Satu pindai membuka lebih banyak cara untuk mengenal budaya di
              balik karakter.
            </p>
          </div>
          <ol className="journey-grid">
            {journey.map(({ icon: Icon, title, text }, i) => (
              <li className="journey-card" key={title}>
                <div className="journey-top">
                  <span>0{i + 1}</span>
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                {i < journey.length - 1 && (
                  <ArrowRight
                    className="journey-arrow"
                    size={20}
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="respect-band">
        <div className="container respect-inner">
          <div className="respect-icon">
            <Landmark size={27} strokeWidth={1.4} />
          </div>
          <div>
            <span className="eyebrow">Berangkat dari rasa hormat</span>
            <h2>Tradisi tetap milik masyarakat yang menjaganya.</h2>
          </div>
          <p>
            WONGKLIK adalah media pendukung pengenalan budaya, bukan pengganti
            pementasan atau pewarisan langsung. Cerita dan visual perlu terus
            dirawat bersama pelaku seni dan masyarakat Tejakula.
          </p>
        </div>
      </section>

      <section className="closing home-closing">
        <div className="container closing-inner">
          <div>
            <span className="eyebrow">Sebuah warisan untuk dikenal</span>
            <h2>
              Mulai dari satu pindai.
              <span>Lanjutkan dengan rasa ingin tahu.</span>
            </h2>
          </div>
          <Link to="/wayang-wong-tejakula" className="button button-gold">
            Baca tentang Wayang Wong <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function WayangWong() {
  usePageTitle("Wayang Wong Tejakula");
  return (
    <main id="main">
      <section className="page-hero culture-hero">
        <div className="hero-grain" aria-hidden="true" />
        <div className="container culture-hero-inner">
          <span className="eyebrow">Seni pertunjukan · Buleleng, Bali</span>
          <h1>
            Wayang Wong
            <br />
            <span>Tejakula.</span>
          </h1>
          <p>
            Ketika kisah Ramayana hadir melalui gerak tari, tapel, dan iringan.
            Kenali seni pertunjukan yang tumbuh bersama masyarakat Tejakula.
          </p>
          <a href="#mengenal" className="button button-gold">
            Mulai membaca <ArrowDown size={16} />
          </a>
        </div>
        <span className="culture-index">01 / PENGANTAR</span>
      </section>

      <section className="section culture-intro" id="mengenal">
        <div className="container culture-lead">
          <span className="eyebrow">01 — Mengenal keseniannya</span>
          <div>
            <h2>
              Ketika kisah Ramayana
              <br />
              menjadi hidup.
            </h2>
            <p>
              Di Tejakula, Wayang Wong adalah dramatari yang mempertemukan gerak
              tari, lakon Ramayana, busana, dan tapel. Tokoh utama berdialog
              dalam bahasa Kawi; punakawan menggunakan bahasa Bali. Perbedaan
              bahasa itu menjadi bagian dari cara cerita dibawakan di panggung.{" "}
              <a
                className="inline-source"
                href="https://repo.isi-dps.ac.id/391/"
                target="_blank"
                rel="noreferrer"
              >
                Baca kajian ISI Denpasar <ExternalLink size={13} />
              </a>
            </p>
            <p>
              Dokumen pencatatan budaya dan liputan setempat menjelaskan
              hubungan pertunjukan ini dengan kehidupan adat Tejakula.
              Pertunjukan sakral berlangsung dalam rangkaian ritual, dan penari
              terkait dengan garis pragina. Untuk pementasan di luar ritual,
              sumber setempat membedakan penggunaan tapel khusus.{" "}
              <a
                className="inline-source"
                href="https://www.detik.com/bali/budaya/d-6285141/tari-wayang-wong-di-tejakula-penarinya-wajib-keturunan-pragina"
                target="_blank"
                rel="noreferrer"
              >
                Baca liputan Detik Bali <ExternalLink size={13} />
              </a>
            </p>
            <p>
              Wayang Wong Tejakula tercatat sebagai Warisan Budaya Takbenda
              UNESCO dalam informasi Dinas Kebudayaan Kabupaten Buleleng.{" "}
              <a
                className="inline-source"
                href="https://disbudpar.bulelengkab.go.id/informasi/detail/artikel/50_tari-wayang-wong-tejakula"
                target="_blank"
                rel="noreferrer"
              >
                Lihat catatan dinas <ExternalLink size={13} />
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="culture-image-section">
        <img
          src={`${import.meta.env.BASE_URL}images/wayang-wong-masks.webp`}
          alt="Seorang anak menggapai deretan tapel Wayang Wong Tejakula"
        />
        <div className="container culture-image-caption">
          <span>
            <a
              href="https://commons.wikimedia.org/wiki/File:Wayang_wong_Tejakula.jpg"
              target="_blank"
              rel="noreferrer"
            >
              Foto: Imadedana · Wikimedia Commons
            </a>{" "}
            ·{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noreferrer"
            >
              CC BY-SA 4.0
            </a>
          </span>
          <span>BULELENG · BALI UTARA</span>
        </div>
      </section>

      <section className="section section-tint culture-forms">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">02 — Bentuk pementasan</span>
              <h2>
                Dua konteks.
                <br />
                Satu warisan yang dijaga.
              </h2>
            </div>
            <p className="section-intro">
              Pementasan Wayang Wong Tejakula memiliki konteks berbeda yang
              perlu dipahami dengan cermat.
            </p>
          </div>
          <div className="form-grid">
            <article className="form-card">
              <span className="form-number">01</span>
              <span className="eyebrow">Dalam rangkaian ritual</span>
              <h3>Pementasan sakral</h3>
              <p>
                Dilaksanakan dalam rangkaian ritual keagamaan tertentu di
                wilayah Desa Tejakula. Penari sakral berkaitan dengan garis
                pragina, yaitu warga yang memiliki hubungan keturunan dengan
                penari terdahulu. Tapel yang disimpan di Pura Pamaksan digunakan
                dalam pementasan ritual menurut reportase lokal.
              </p>
              <span className="form-note">
                Konteks dan ketentuannya dijaga oleh masyarakat setempat.
              </span>
            </article>
            <article className="form-card form-card-light">
              <span className="form-number">02</span>
              <span className="eyebrow">Di luar rangkaian ritual</span>
              <h3>Pementasan seremonial</h3>
              <p>
                Bentuk seremonial dapat dipentaskan di luar konteks ritual
                dengan menggunakan tapel khusus untuk keperluan tersebut.{" "}
                <a
                  className="inline-source"
                  href="https://rri.co.id/denpasar/hiburan/2176540/kesenian-tradisional-tari-wayang-wong-desa-tejakula"
                  target="_blank"
                  rel="noreferrer"
                >
                  RRI: Kesenian tradisional Tari Wayang Wong{" "}
                  <ExternalLink size={13} />
                </a>
              </p>
              <span className="form-note">
                Setiap pementasan tetap perlu dipahami sesuai konteksnya.
              </span>
            </article>
          </div>
        </div>
      </section>

      <section className="section video-section" id="video">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">03 — Lihat pementasannya</span>
              <h2>
                Gerak, topeng,
                <br />
                dan suasana upacara.
              </h2>
            </div>
            <p className="section-intro">
              Cuplikan ini direkam saat pementasan di lingkungan pura. Tonton
              dengan memahami konteks ritual dan keterangan dari pembuat
              videonya.
            </p>
          </div>
          <div className="video-grid">
            <article className="video-card">
              <div className="video-frame">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/QNttWdF5qcU?rel=0"
                  title="Tari Wayang Wong Tejakula di Pura Puseh Desa Adat Tejakula, bagian pertama"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="video-meta">
                <span>
                  <Play size={14} /> PEMENTASAN DI PURA PUSEH
                </span>
                <a
                  href="https://www.youtube.com/watch?v=QNttWdF5qcU"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tonton di YouTube <ExternalLink size={14} />
                </a>
              </div>
              <h3>Wayang Wong Tejakula · Bagian I</h3>
              <p>Rekaman iWagu Production, dipublikasikan Desember 2022.</p>
            </article>
            <article className="video-card">
              <div className="video-frame">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/WKFiBscBCM8?rel=0"
                  title="Cuplikan pementasan Wayang Wong Tejakula di Pura Baleagung Desa Sukawana"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="video-meta">
                <span>
                  <Play size={14} /> POTONGAN ADEGAN
                </span>
                <a
                  href="https://www.youtube.com/watch?v=WKFiBscBCM8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tonton di YouTube <ExternalLink size={14} />
                </a>
              </div>
              <h3>Sepenggal adegan Ramayana</h3>
              <p>Rekaman Gede Partha Wijaya di Pura Baleagung, Sukawana.</p>
            </article>
          </div>
          <p className="video-note">
            Video dimiliki dan dipublikasikan oleh kanal masing-masing. Sematan
            dapat diputar langsung dari halaman ini.
          </p>
        </div>
      </section>

      <section className="section sources-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">04 — Bacaan lanjutan</span>
              <h2>Kenali dari sumbernya.</h2>
            </div>
            <p className="section-intro">
              Ringkasan di halaman ini merujuk pada tulisan kebudayaan,
              penelitian seni, dan dokumentasi pemerintah.
            </p>
          </div>
          <div className="source-list">
            <a
              href="https://disbudpar.bulelengkab.go.id/informasi/detail/artikel/50_tari-wayang-wong-tejakula"
              target="_blank"
              rel="noreferrer"
            >
              <span className="source-type">
                DINAS KEBUDAYAAN BULELENG · 2021
              </span>
              <strong>Tari Wayang Wong Tejakula</strong>
              <span>
                Gambaran singkat tentang kesenian dan konteks warisannya.
              </span>
              <ExternalLink size={17} />
            </a>
            <a
              href="https://repo.isi-dps.ac.id/391/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="source-type">ISI DENPASAR · 2008</span>
              <strong>Wayang Wong Tejakula sebagai sumber cerita</strong>
              <span>
                Artikel seni pertunjukan tentang Ramayana, tapel, dialog Kawi,
                dan gaya pementasan.
              </span>
              <ExternalLink size={17} />
            </a>
            <a
              href="https://rri.co.id/singaraja/features/459180/menari-untuk-tuhan"
              target="_blank"
              rel="noreferrer"
            >
              <span className="source-type">RRI SINGARAJA · 2023</span>
              <strong>Menari untuk Tuhan</strong>
              <span>
                Liputan tentang penari dan pementasan Wayang Wong di Tejakula.
              </span>
              <ExternalLink size={17} />
            </a>
            <a
              href="https://www.detik.com/bali/budaya/d-6285141/tari-wayang-wong-di-tejakula-penarinya-wajib-keturunan-pragina"
              target="_blank"
              rel="noreferrer"
            >
              <span className="source-type">DETIK BALI · 2022</span>
              <strong>Penari dan tapel dalam tradisi Tejakula</strong>
              <span>
                Reportase tentang keterkaitan penari pragina dan penggunaan
                tapel.
              </span>
              <ExternalLink size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="section culture-values">
        <div className="container culture-lead">
          <span className="eyebrow">05 — Cara mengenal dengan baik</span>
          <div>
            <h2>
              Belajar budaya.
              <br />
              Hormati batasnya.
            </h2>
            <p>
              Informasi digital dapat membantu membuka akses, tetapi tidak
              menggantikan pengetahuan dan keputusan masyarakat pemilik tradisi.
              Materi yang dibagikan sebaiknya disusun bersama pelaku seni, krama
              pragina, dan pihak setempat.
            </p>
            <div className="culture-principles">
              <div>
                <strong>Kenali konteksnya</strong>
                <span>
                  Bedakan informasi umum dari hal yang berada dalam ranah adat.
                </span>
              </div>
              <div>
                <strong>Dengarkan masyarakat</strong>
                <span>
                  Pelaku seni dan masyarakat Tejakula menjadi rujukan utama.
                </span>
              </div>
              <div>
                <strong>Lanjutkan secara langsung</strong>
                <span>
                  Pengalaman digital bisa mengantar pada apresiasi terhadap seni
                  dan pementasan.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="culture-qr">
        <div className="container">
          <QRPanel
            character={{
              id: "wayang-wong-tejakula",
              name: "Wayang Wong Tejakula",
            }}
          />
        </div>
      </section>
      <section className="closing">
        <div className="container closing-inner">
          <h2>
            Cerita ini hidup<span>karena ada yang menjaganya.</span>
          </h2>
          <Link to="/" className="button button-gold">
            Kembali ke WONGKLIK <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function NotFound() {
  usePageTitle("Halaman tidak ditemukan");
  return (
    <main id="main" className="container not-found">
      <span className="eyebrow">404 · Halaman tidak ditemukan</span>
      <h1>Sepertinya kita tersesat.</h1>
      <p>Halaman ini belum menjadi bagian dari cerita WONGKLIK.</p>
      <Link to="/" className="button button-dark">
        Kembali ke beranda
      </Link>
    </main>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Lewati ke konten
      </a>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<WayangWong />} />
        <Route path="/characters" element={<WayangWong />} />
        <Route path="/characters/:id" element={<WayangWong />} />
        <Route path="/wayang-wong-tejakula" element={<WayangWong />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
