import Image from "next/image";
import styles from "@/styles/SmaQFeatures.module.css";
import Link from "next/link";

const SmaQFeatures: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>SmaQでできること</p>
      <div className={styles.SmaQFeaturesContainer}>
        <div className={styles.bannerWrapper}>
          <p>スマホの使い方・知識について、</p>
          <p>クイズで楽しくマスター</p>
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
            難易度別で
            <br />
            選べるクイズ
          </div>
          <div className={styles.feature}>
            <p>
              回答はワンタップで
              <br />
              サクサク学習
            </p>
          </div>
          <div className={styles.feature}>丁寧な解説つき</div>
        </div>

        <Link href="/quiz" className={styles.button}>
          アプリをインストール
        </Link>
      </div>
    </div>
  );
};

export default SmaQFeatures;
