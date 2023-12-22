import AboutSmaQ from "@/components/AboutSmaQ";
import MainVisual from "@/components/MainVisual";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <MainVisual />
      <AboutSmaQ />
      <Link href="/quiz">
        クイズを作成する
      </Link>
    </div>
  )
}
