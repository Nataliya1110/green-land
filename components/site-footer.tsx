import { Leaf } from 'lucide-react'
import { links, nav } from '@/lib/site'

const socials = [
  { href: links.instagram, label: 'Instagram', handle: '@green_land_bukovel' },
  { href: links.threads, label: 'Threads', handle: '@green_land_bukovel' },
  { href: links.tiktok, label: 'TikTok', handle: '@green.land.bukovel' },
  { href: links.booking, label: 'Booking.com', handle: 'Шале Green Land' },
]

export function SiteFooter() {
  return (
    <footer id="contacts" className="bg-wood-dark text-snow">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 font-serif text-3xl tracking-[0.18em]">
              <Leaf className="size-6 text-[#a8cc5c]" aria-hidden="true" />
              GREEN LAND
            </p>
            <p className="mt-4 max-w-sm leading-relaxed text-snow/70">
              Сімейне шале у Буковелі для спокійного відпочинку, ретритів і єднання з природою.
            </p>
          </div>

          <nav aria-label="Навігація у футері">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e0b67a]">Розділи</h2>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-snow/80">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-snow">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e0b67a]">Бронювання та соцмережі</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-baseline justify-between gap-4 border-b border-snow/15 pb-3 hover:text-[#a8cc5c]"
                  >
                    <span className="font-medium">{s.label}</span>
                    <span className="text-sm text-snow/60">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-16 border-t border-snow/10 pt-6 text-sm text-snow/50">
          {'© '}
          {new Date().getFullYear()} GREEN LAND Bukovel. Звук: спів птахів, Wikimedia Commons.
        </p>
      </div>
    </footer>
  )
}
