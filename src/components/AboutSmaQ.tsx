import Image from 'next/image'
import styles from '@/styles/AboutSmaQ.module.css'

const AboutSmaQ: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Image
          src="/logo.png"
          alt="logo"
          width={220}
          height={200}
          className={styles.logo}
        />

        <p className={styles.text}>
          スマホを使える人と使えない人の間にできる格差、
          <br />
          「 デジタルディバイド 」<br />
          <br />
          この問題を解決する架け橋になる
          <br />
          スマホクイズアプリ「 SmaQ 」
        </p>
      </div>

      <div className={styles.rightContainer}>
        <Image
          src="/about.png"
          alt="aboutImage"
          width={350}
          height={1000}
          className={styles.aboutImage}
        />
      </div>
    </div>
  )
}

export default AboutSmaQ
