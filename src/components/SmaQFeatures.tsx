import Image from "next/image";
import styles from "@/styles/SmaQFeatures.module.css";
import Link from "next/link";

const SmaQFeatures: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>SmaQでできること</p>

      <div className={styles.SmaQFeaturesContainer}>
        <div className={styles.bannerWrapper}>
          <p className={styles.bannerText}>スマホの使い方・知識について、</p><br />
          <p className={styles.bannerText}>クイズで楽しくマスター</p>
        </div>

        <Image
          src="/mock2.png"
          alt="mock2"
          width={800}
          height={1000}
          className={styles.aboutImage}
        />

        <div className={styles.features}>
          <div className={styles.feature}>
            <p>難易度別で</p>
            <p>選べるクイズ</p>
          </div>
          <div className={styles.feature}>
            <p>回答はワンタップで</p>
            <p>サクサク学習</p>
          </div>
          <div className={styles.feature}>
            <p>丁寧な解説つき</p>
          </div>
        </div>

        <Link href="/quiz" className={styles.button}>
          アプリをインストール
        </Link>
      </div>
    </div>
  );
};

export default SmaQFeatures;
