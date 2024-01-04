import Image from 'next/image'
import styles from '@/styles/Footer.module.css'

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/logo.png"
        alt="logo"
        width={150}
        height={200}
        className={styles.logo}
      />
    </div>
  )
}

export default Footer
