import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Subtle shadow once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="nav-wrap container">
        <Link to="/" className="brand-link" aria-label="WONGKLIK, ke beranda">
          <img src={`${import.meta.env.BASE_URL}images/wongklik-logo-cropped.png`} alt="WONGKLIK — Warisan & Cerita" className="brand-logo" />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="site-nav"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav id="site-nav" className={open ? "nav-links is-open" : "nav-links"} aria-label="Navigasi utama">
          <NavLink to="/" end>Beranda</NavLink>
          <NavLink to="/wayang-wong-tejakula">Tentang Wayang Wong</NavLink>
          <Link to="/#cara-kerja">Cara kerja</Link>
          <Link className="nav-cta" to="/wayang-wong-tejakula">
            Kenali ceritanya <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
