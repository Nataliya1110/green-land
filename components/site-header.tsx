'use client'

import { useEffect, useState } from 'react'
import { Leaf, Menu, X } from 'lucide-react'
import { links, nav } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled || open ? 'bg-wood-dark/90 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2 text-snow">
          <Leaf className="size-5 text-[#a8cc5c]" aria-hidden="true" />
          <span className="font-serif text-2xl tracking-[0.18em]">GREEN LAND</span>
        </a>

        <nav aria-label="Головна навігація" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm text-snow/85">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-snow">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-snow px-5 py-2 text-sm font-medium text-wood-dark transition-colors hover:bg-[#e7dccb] sm:inline-block"
          >
            Забронювати
          </a>
          <button
            type="button"
            className="rounded-full p-2 text-snow lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Мобільна навігація" className="border-t border-snow/10 lg:hidden">
          <ul className="flex flex-col px-5 py-4 text-snow">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block py-3 text-lg" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block rounded-full bg-snow py-3 text-center font-medium text-wood-dark"
              >
                Забронювати
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
