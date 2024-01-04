import AboutSmaQ from "@/components/AboutSmaQ";
import MainVisual from "@/components/MainVisual";
import SmaQFeatures from "@/components/SmaQFeatures";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <MainVisual />
      <AboutSmaQ />
      <SmaQFeatures />
    </div>
  );
}
