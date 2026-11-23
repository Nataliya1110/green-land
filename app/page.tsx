import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Rooms } from '@/components/rooms'
import { Retreats } from '@/components/retreats'
import { Restaurant } from '@/components/restaurant'
import { Transfer } from '@/components/transfer'
import { Gallery } from '@/components/gallery'
import { Location } from '@/components/location'
import { SiteFooter } from '@/components/site-footer'
import { BirdSound } from '@/components/bird-sound'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Retreats />
        <Restaurant />
        <Transfer />
        <Gallery />
        <Location />
      </main>
      <SiteFooter />
      <BirdSound />
    </>
  )
}
