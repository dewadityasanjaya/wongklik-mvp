import { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { Check, Copy, Download, QrCode } from 'lucide-react'

export default function QRPanel({ character }) {
  const [qr, setQr] = useState('')
  const [copied, setCopied] = useState(false)
  const path = character.id === 'wayang-wong-tejakula'
    ? '/wayang-wong-tejakula'
    : `/characters/${character.id}`
  const url = typeof window !== 'undefined'
    ? `${new URL(import.meta.env.BASE_URL, window.location.origin).href}#${path}`
    : path

  useEffect(() => {
    let alive = true
    QRCode.toDataURL(url, { width: 480, margin: 2, color: { dark: '#1f1a15', light: '#ffffff' } })
      .then((data) => { if (alive) setQr(data) })
      .catch(() => { if (alive) setQr('') })
    return () => { alive = false }
  }, [url])

  const download = () => {
    if (!qr) return
    const a = document.createElement('a')
    a.href = qr
    a.download = `wongklik-qr-${character.id}.png`
    a.click()
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable: the URL is still visible on screen */
    }
  }

  return (
    <section className="qr-panel" aria-labelledby="qr-title">
      <div className="qr-copy">
        <span className="eyebrow"><QrCode size={16} /> Terhubung lewat QR</span>
        <h2 id="qr-title">Cerita ini bisa ikut ke mana saja.</h2>
        <p>QR code ini membuka halaman {character.name} secara langsung.</p>
        <div className="qr-url">{url}</div>
        <div className="qr-actions">
          <button className="button button-dark" onClick={download} disabled={!qr}>
            <Download size={16} /> Unduh QR code
          </button>
          <button className="button button-ghost" onClick={copy}>
            {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Tautan disalin' : 'Salin tautan'}
          </button>
        </div>
        <p className="fine-print">
          QR dari versi lokal hanya bisa dibuka di perangkat yang terhubung ke alamat tersebut.
          Buat ulang QR setelah website dipublikasikan di domain final, sebelum dicetak.
        </p>
      </div>
      <div className="qr-art">
        {qr ? <img src={qr} alt={`QR code untuk ${character.name}`} /> : <div className="qr-loading">Membuat QR…</div>}
        <strong>WONGKLIK · {character.name}</strong>
        <span>Pindai, kenali, lestarikan</span>
      </div>
    </section>
  )
}
