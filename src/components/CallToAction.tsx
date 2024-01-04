import styles from '@/styles/CallToAction.module.css'
import Link from 'next/link'

const CallToActtion: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>一緒に、スマホの「できる」を広げませんか？</h1>

      <p>SmaQは、スマホを使いこなせるすべての人々に、</p>
      <p>
        クイズ形式でスマホの知識や便利な使い方を共有する場を提供しています。
      </p>
      <br />

      <p>
        あなたの知識が、デジタルディバイドを埋める一歩となるかもしれません。
      </p>
      <br />

      <p>スマホに関する面白い豆知識や、便利な機能、知って得する小技から、</p>
      <p>基本的な操作方法まで、どんな情報でも大歓迎です。</p>

      <Link href="/quiz" className={styles.button}>
        クイズを作成する
      </Link>
    </div>
  )
}

export default CallToActtion
