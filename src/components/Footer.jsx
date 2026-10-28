import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="WONGKLIK, ke beranda">
            <span className="brand-mark" aria-hidden="true">W</span>
            <span>WONGKLIK<small>Wayang Wong Tejakula</small></span>
          </Link>
          <p>Gantungan kunci interaktif untuk mengenal Wayang Wong Tejakula melalui cerita dan teknologi.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/">Beranda</Link>
          <Link to="/wayang-wong-tejakula">Tentang Wayang Wong</Link>
          <Link to="/cerita-ramayana">Cerita Ramayana</Link>
        </nav>
      </div>
      <div className="container footer-base">
        <span>© {new Date().getFullYear()} WONGKLIK</span>
        <span>Budaya dalam genggaman</span>
      </div>
    </footer>
  )
}
