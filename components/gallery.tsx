import Image from 'next/image'
import { SectionHeading } from './section-heading'

const videos = ['/media/video-1.mp4', '/media/video-2.mp4', '/media/video-4.mp4', '/media/video-5.mp4']

const photos = [
  { src: '/media/photo-1.jpg', alt: 'Захід сонця над горами з вікна спальні' },
  { src: '/media/photo-2.jpg', alt: 'Дитина зустрічає світанок біля вікна шале' },
  { src: '/media/photo-4.jpg', alt: 'Сонце крізь ялиновий ліс поруч із шале' },
  { src: '/media/photo-5.jpg', alt: 'Затишний куточок з гітарою біля вікна з видом на осінній ліс' },
  { src: '/media/photo-8.jpg', alt: 'Панорамні двері на балкон з видом на гори' },
  { src: '/media/photo-9.jpg', alt: 'Інтер\u2019єр шале GREEN LAND' },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Атмосфера"
          title="Прокидатися з видом на гори"
          text="Кілька моментів із життя GREEN LAND — більше в нашому Instagram і TikTok."
        />

        <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {videos.map((src) => (
            <li key={src} className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-wood-dark">
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Відео з території шале GREEN LAND"
                className="size-full object-cover"
              />
            </li>
          ))}
        </ul>

        <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
          {photos.map((p) => (
            <li key={p.src} className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
