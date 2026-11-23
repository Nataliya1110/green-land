import Image from 'next/image'
import { Car, Clock, Luggage } from 'lucide-react'
import { links } from '@/lib/site'

const points = [
  { icon: Car, text: 'Зустрінемо на вокзалі чи в аеропорту та доставимо до шале' },
  { icon: Luggage, text: 'Комфортно для родин з дітьми та груп ретриту' },
  { icon: Clock, text: 'Час і маршрут узгоджуємо заздалегідь' },
]

export function Transfer() {
  return (
    <section id="transfer" className="relative overflow-hidden py-24 md:py-32">
      <Image
        src="/media/photo-20.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-wood-dark/75" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-5 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl text-snow">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#e0b67a]">Трансфер</p>
          <h2 className="text-balance font-serif text-4xl font-medium leading-tight md:text-5xl">
            Доберетесь легко — ми подбаємо про дорогу
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-snow/80">
            За додаткову плату організуємо трансфер до GREEN LAND та назад. Просто напишіть нам дату й місце зустрічі.
          </p>
        </div>
        <div className="w-full max-w-md rounded-2xl bg-snow/95 p-8 text-wood-dark shadow-xl">
          <ul className="flex flex-col gap-5">
            {points.map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest text-snow">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <p className="leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block rounded-full bg-wood-dark py-3.5 text-center font-medium text-snow transition-colors hover:bg-forest"
          >
            Замовити трансфер
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground">Послуга надається за додаткову плату</p>
        </div>
      </div>
    </section>
  )
}
