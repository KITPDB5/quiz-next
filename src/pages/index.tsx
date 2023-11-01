import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Home</p>
      <Link href="/quiz">
        クイズを作成する
      </Link>
    </div>
  )
}
