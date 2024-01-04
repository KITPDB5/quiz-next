import AboutSmaQ from '@/components/AboutSmaQ'
import CallToActtion from '@/components/CallToAction'
import Footer from '@/components/Footer'
import MainVisual from '@/components/MainVisual'
import SmaQFeatures from '@/components/SmaQFeatures'

export default function Home() {
  return (
    <>
      <MainVisual />
      <AboutSmaQ />
      <SmaQFeatures />
      <CallToActtion />

      <Footer />
    </>
  )
}
