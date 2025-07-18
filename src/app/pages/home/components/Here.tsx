'use client';

import { ThreeDMarquee } from '@components/ui/3d-marquee';
import { externalLinks, PATHS } from '@config/paths-app.data';
import { ELayoutCSS } from '@shared/types';
import { Link } from 'react-router-dom';

// const images = [
//   "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
//   "https://assets.aceternity.com/animated-modal.png",
//   "https://assets.aceternity.com/animated-testimonials.webp",
//   "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
//   "https://assets.aceternity.com/github-globe.png",
//   "https://assets.aceternity.com/glare-card.png",
//   "https://assets.aceternity.com/layout-grid.png",
//   "https://assets.aceternity.com/flip-text.png",
//   "https://assets.aceternity.com/hero-highlight.png",
//   "https://assets.aceternity.com/carousel.webp",
//   "https://assets.aceternity.com/placeholders-and-vanish-input.png",
//   "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
//   "https://assets.aceternity.com/signup-form.png",
//   "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
//   "https://assets.aceternity.com/spotlight-new.webp",
//   "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
//   "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
//   "https://assets.aceternity.com/tabs.png",
//   "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
//   "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
//   "https://assets.aceternity.com/glowing-effect.webp",
//   "https://assets.aceternity.com/hover-border-gradient.png",
//   "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
//   "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
//   "https://assets.aceternity.com/macbook-scroll.png",
//   "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
//   "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
//   "https://assets.aceternity.com/multi-step-loader.png",
//   "https://assets.aceternity.com/vortex.png",
//   "https://assets.aceternity.com/wobble-card.png",
//   "https://assets.aceternity.com/world-map.webp",
// ];

function Here() {
  const images = [
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
    '/logo.jpg',
  ];
  return (
    <div
      className={`${ELayoutCSS.LEVEL_1} relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl`}
    >
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
        Документация{' '}
        <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          Quantum Hub StartUp
        </span>{' '}
        Начать прям сейчас.
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        Документация Quantum Hub StartUp. Здесь собрана информация о проекте Quantum Hub StartUp,
        есть как техническая часть так и пользовательская.
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          to={PATHS.home.path}
          className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
        >
          Главная
        </Link>
        <Link
          target="_blank"
          to={externalLinks.qhProject.url}
          className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
        >
          {externalLinks.qhProject.name}
        </Link>
        <Link
          to={PATHS.about.path}
          className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
        >
          О нас
        </Link>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}

export default Here;
