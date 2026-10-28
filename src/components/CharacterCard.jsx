import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function CharacterCard({ character }) {
  return (
    <Link to={`/characters/${character.id}`} className={`character-card accent-${character.accent}`}>
      <div className="character-image-wrap">
        <img src={character.image} alt={`Ilustrasi ${character.name}`} loading="lazy" />
        <span className="card-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
      </div>
      <div className="character-card-info">
        <span className="eyebrow">{character.role}</span>
        <h3>{character.name}</h3>
        <p>{character.summary}</p>
      </div>
    </Link>
  )
}
