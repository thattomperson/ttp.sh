import styles from './Card.module.css'

interface CardProps {
  title: string
  image?: string
}

export default function Card({ title, image }: CardProps) {
  return <div className={`${styles.card} rounded-xl bg-gray-800 shadow-xl flex transition-all transform hover:scale-105 relative`} style={{minHeight: '10em'}}>
    {image ? <img className={`${styles.image} transition-all`} width="160" height="160" src={image} /> : null}
    <div className="p-4 text-gray-200">
      <h2 className="text-lg">{title}</h2>
    </div>
  </div>
}