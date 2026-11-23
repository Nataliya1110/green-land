import Image from 'next/image'
import { Mountain, Sunrise, Trees, Users } from 'lucide-react'
import { SectionHeading } from './section-heading'

const values = [
  { icon: Mountain, title: 'Вид на гори', text: 'Панорамні вікна з краєвидами Карпат просто з ліжка.' },
  { icon: Sunrise, title: 'Світанки й заходи', text: 'Тераси та балкони, де час сповільнюється.' },
  { icon: Trees, title: 'Ліс поруч', text: 'Прогулянки стежками, гриби та чисте гірське повітря.' },
  { icon: Users, title: 'Сімейна атмосфера', text: 'Тихе, затишне місце для відпочинку з дітьми.' },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Про GREEN LAND"
            title="Шале, створене для релаксу серед природи"
            text="Ми побудували GREEN LAND як місце спокою: натуральне дерево, теплий текстиль, великі вікна й тиша, яку порушує лише спів птахів. Тут легко перезавантажитись, провести час з родиною та відчути єднання з природою."
          />
          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest text-snow">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-wood-dark">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative grid grid-cols-5 gap-4">
          <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/media/house.jpg"
              alt="Дерев'яне шале GREEN LAND з темним дахом серед високої трави"
              fill
              sizes="(min-width: 1024px) 30vw, 60vw"
              className="object-cover"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-4 pt-16">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/media/photo-15.jpg"
                alt="Гостя з чашкою чаю біля панорамного вікна з видом на гори"
                fill
                sizes="(min-width: 1024px) 20vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl bg-wood-dark p-5 text-snow">
              <p className="font-serif text-4xl">100%</p>
              <p className="mt-1 text-sm text-snow/75">натуральне дерево та карпатське повітря</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
