import Image from "next/image";
import styles from "@/styles/MainVisual.module.css";
import Link from "next/link";

const MainVisual: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/logo.png"
        alt="logo"
        width={150}
        height={200}
        className={styles.logo}
      />

      <div className={styles.mainVisualContainer}>
        <div className={styles.leftContainer}>
          <p className={styles.subtext}>スマホの使い方を楽しく学ぶ！</p>
          <p className={styles.headline}>初心者向けクイズゲーム</p>
          <Link href="/quiz" className={styles.button}>
            クイズを作成する
          </Link>
        </div>

        <div className={styles.rightContainer}>
          <Image
            src="/mock1.png"
            alt="スマートフォン"
            width={550}
            height={1000}
            className={styles.mock1}
          />
        </div>
      </div>
    </div>
  );
};

export default MainVisual;
