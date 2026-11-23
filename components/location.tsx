import { MapPin, Navigation } from 'lucide-react'
import { links } from '@/lib/site'
import { SectionHeading } from './section-heading'

export function Location() {
  return (
    <section id="location" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="Розташування"
            title="Шале Green Land, Буковель"
            text="Ми розташовані на схилі серед луків і ялинових лісів, неподалік від курорту Буковель — тихо, але все поруч."
          />
          <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-card p-7 shadow-sm">
            <p className="flex items-start gap-3 text-foreground">
              <MapPin className="mt-0.5 size-5 shrink-0 text-wood" aria-hidden="true" />
              <span>
                Шале Green Land, Буковель, Івано-Франківська область
                <span className="mt-1 block text-sm text-muted-foreground">GPS: 48.344518, 24.431973</span>
              </span>
            </p>
            <a
              href={links.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-forest py-3.5 font-medium text-snow transition-colors hover:bg-wood-dark"
            >
              <Navigation className="size-4" aria-hidden="true" />
              Прокласти маршрут
            </a>
          </div>
        </div>
        <div className="min-h-96 overflow-hidden rounded-2xl border border-border lg:col-span-3">
          <iframe
            src={links.mapEmbed}
            title="Карта: шале Green Land у Буковелі"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="size-full min-h-96"
          />
        </div>
      </div>
    </section>
  )
}
