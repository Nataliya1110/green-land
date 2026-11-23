import Image from 'next/image'
import { Check } from 'lucide-react'
import { links } from '@/lib/site'
import { SectionHeading } from './section-heading'

const rooms = [
  {
    image: '/media/photo-12.jpg',
    alt: 'Двоповерховий номер з дерев\u2019яними сходами та панорамним вікном на гори',
    title: 'Шале з мансардою',
    text: 'Високі стелі, трикутне вікно в небо, другий ярус для сну та власний балкон з видом на Карпати.',
    features: ['Балкон з краєвидом', 'Міні-кухня', 'Для сім\u2019ї з дітьми'],
  },
  {
    image: '/media/photo-10.jpg',
    alt: 'Затишний номер з дерев\u2019яними стінами, двоспальним ліжком і столиком біля вікна',
    title: 'Номер «Сонячний»',
    text: 'Тепле дерево, м\u2019який текстиль і ранкове сонце крізь великі вікна. Ідеально для пари.',
    features: ['Двоспальне ліжко', 'Вихід на терасу', 'Чайна зона'],
  },
  {
    image: '/media/photo-14.jpg',
    alt: 'Мансардна спальня з двома ліжками та вікном у даху',
    title: 'Мансардна спальня',
    text: 'Окремі ліжка під дерев\u2019яним дахом і вікно в небо — щоб засинати під зорями.',
    features: ['Два окремі ліжка', 'Мансардне вікно', 'Тиша й затишок'],
  },
]

export function Rooms() {
  return (
    <section id="rooms" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Проживання"
            title="Дерев'яні шале з панорамними вікнами"
            text="Кожен номер оздоблений натуральним деревом і відкриває вид на гори, ліс або світанок."
          />
          <a
            href={links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start rounded-full bg-forest px-7 py-3.5 font-medium text-snow transition-colors hover:bg-wood-dark md:self-auto"
          >
            Ціни та наявність на Booking
          </a>
        </div>

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {rooms.map((room) => (
            <li key={room.title} className="group overflow-hidden rounded-2xl bg-card shadow-sm">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl font-semibold text-wood-dark">{room.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{room.text}</p>
                <ul className="mt-5 flex flex-col gap-2 text-sm text-foreground">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="size-4 text-forest" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
