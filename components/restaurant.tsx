import Image from 'next/image'
import { Coffee, Moon, Soup } from 'lucide-react'
import { SectionHeading } from './section-heading'

const meals = [
  { icon: Coffee, title: 'Сніданок', text: 'Свіжа випічка, брускети, сирники та ароматна кава з видом на гори.' },
  { icon: Soup, title: 'Обід', text: 'Домашні страви карпатської та європейської кухні з місцевих продуктів.' },
  { icon: Moon, title: 'Вечеря', text: 'Теплі вечори у затишній залі або на терасі під зоряним небом.' },
]

export function Restaurant() {
  return (
    <section id="restaurant" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Ресторан"
          title="Затишний ресторан для всієї родини"
          text="Замовляйте сніданок, обід та вечерю — ми готуємо з любов'ю та подаємо в залі з дерев'яними стінами або на терасі з панорамою Карпат."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-4 md:grid-rows-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 md:aspect-auto">
            <Image
              src="/media/photo-3.jpg"
              alt="Сервірований стіл на дерев'яній терасі з видом на ліс і зелені луки"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/media/photo-7.jpg"
              alt="Білі столики та стільці в дерев'яній залі ресторану"
              fill
              sizes="(min-width: 768px) 25vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/media/photo-17.jpg"
              alt="Столик з букетом сухоцвітів біля вікна з краєвидом гір"
              fill
              sizes="(min-width: 768px) 25vw, 100vw"
              className="object-cover"
            />
          </div>
          <ul className="flex flex-col justify-center gap-5 rounded-2xl bg-wood-dark p-7 text-snow md:col-span-2">
            {meals.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <Icon className="mt-1 size-5 shrink-0 text-[#e0b67a]" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-xl">{title}</h3>
                  <p className="text-sm leading-relaxed text-snow/75">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
