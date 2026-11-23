import Image from 'next/image'
import { ArrowDown, MapPin } from 'lucide-react'
import { links } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-end overflow-hidden bg-wood-dark">
      <Image
        src="/media/hero-bukovel.png"
        alt="Панорама засніжених Карпат і ялинових лісів Буковеля"
        fill
        priority
        sizes="100vw"
        className="animate-slow-zoom object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/60 via-wood-dark/10 to-wood-dark/85" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 md:px-8 md:pb-28">
        <p className="mb-5 flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-snow/85">
          <MapPin className="size-4" aria-hidden="true" />
          Буковель · Українські Карпати
        </p>
        <h1 className="max-w-4xl text-balance font-serif text-5xl font-medium leading-[1.02] text-snow md:text-7xl lg:text-8xl">
          Тиша гір, запах лісу і тепло дерева
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-snow/85">
          GREEN LAND — невелике сімейне шале серед карпатської природи. Місце, де прокидаються з видом на гори, зустрічають
          світанки й повертаються до себе.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-snow px-7 py-3.5 font-medium text-wood-dark transition-colors hover:bg-[#e7dccb]"
          >
            Забронювати відпочинок
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 rounded-full border border-snow/40 px-7 py-3.5 text-snow transition-colors hover:bg-snow/10"
          >
            Дізнатись більше
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
