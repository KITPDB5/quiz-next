import Image from 'next/image';
import styles from '@/styles/AboutSmaQ.module.css';
import Link from 'next/link';

const AboutSmaQ: React.FC = () => {
  return (
    <div className={styles.container}>

    <div className={styles.leftContainer}>
        <Image src="/logo.png" alt="logo" width={150} height={200} className={styles.logo}/>

        <p>スマホを使える人と使えない人の間にできる格差、<br />
        「 デジタルディバイド 」<br />
        この問題を解決する架け橋になる<br />
        スマホクイズアプリ。</p>
    </div>

        <div className={styles.rightContainer}>
            <Image src="/about.png" alt="aboutImage" width={550} height={1000} className={styles.aboutImage} />
        </div>
    </div>
  );
};

export default AboutSmaQ;
