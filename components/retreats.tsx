import Image from 'next/image'
import { Flower2, HeartHandshake, Leaf } from 'lucide-react'
import { links } from '@/lib/site'
import { SectionHeading } from './section-heading'

const formats = [
  {
    icon: Flower2,
    title: 'Йога-ретрити',
    text: 'Практики на світанку з видом на гори, медитації та дихальні вправи у тиші лісу.',
  },
  {
    icon: HeartHandshake,
    title: 'Психологічні групи',
    text: 'Затишний простір для терапевтичних зустрічей, кіл підтримки та трансформаційних програм.',
  },
  {
    icon: Leaf,
    title: 'Єднання з природою',
    text: 'Прогулянки лісом, збір грибів і трав, повільні ранки та справжній цифровий детокс.',
  },
]

export function Retreats() {
  return (
    <section id="retreats" className="relative overflow-hidden bg-forest py-24 text-snow md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:order-2">
          <Image
            src="/media/photo-6.jpg"
            alt="Група учасниць ретриту сидить колом біля панорамного вікна з видом на ліс"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-wood-dark/80 p-5 backdrop-blur-md">
            <p className="font-serif text-xl italic">
              {'«Тут легко чути себе — гори роблять половину роботи»'}
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            light
            eyebrow="Ретрити та групи"
            title="Простір для йогів, психологів і всіх, хто шукає себе"
            text="Ми радо приймаємо ведучих ретритів: зала з панорамним вікном, тиша, харчування для групи та допомога з організацією трансферу."
          />
          <ul className="mt-12 flex flex-col gap-6">
            {formats.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-5 border-t border-snow/15 pt-6">
                <Icon className="mt-1 size-6 shrink-0 text-[#a8cc5c]" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-2xl">{title}</h3>
                  <p className="mt-1 leading-relaxed text-snow/75">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-snow px-7 py-3.5 font-medium text-forest transition-colors hover:bg-[#e7dccb]"
          >
            Обговорити ретрит
          </a>
        </div>
      </div>
    </section>
  )
}
