import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRightIcon,
  GalleryThumbnailsIcon,
  RockingChairIcon,
  SparklesIcon,
} from "lucide-animated";
import { bookingUrl } from "../data/booking.js";
import { rooms } from "../data/rooms.js";

export default function Rooms() {
  const [activeSlug, setActiveSlug] = useState(rooms[0].slug);
  const [activeImage, setActiveImage] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeRoom = rooms.find((room) => room.slug === activeSlug) ?? rooms[0];

  const selectRoom = (slug) => {
    setActiveSlug(slug);
    setActiveImage(0);
  };

  return (
    <section id="rooms" className="scroll-mt-28 bg-white py-20 lg:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="eyebrow">Room Photos</p>
            <h2 className="heading-lg mt-4">See the Rooms Before You Stay</h2>
            <p className="body-copy mt-5">
              Browse the Deep Cove, Lynn Valley, and Seymour rooms with real guest-room
              photography from the property.
            </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="grid grid-cols-3 gap-2 rounded-lg border border-forest/10 bg-cream p-2 shadow-card"
          >
            {rooms.map((room) => {
              const isActive = room.slug === activeSlug;
              return (
                <button
                  key={room.slug}
                  type="button"
                  onClick={() => selectRoom(room.slug)}
                  className={`focus-ring rounded-md px-3 py-3 text-left transition-colors ${
                    isActive
                      ? "bg-forest text-cream"
                      : "bg-white text-forest hover:bg-forest/10"
                  }`}
                >
                  <span className="block text-sm font-bold uppercase">{room.shortName}</span>
                  <span className={`mt-1 flex items-center gap-1 text-sm ${isActive ? "text-cream/85" : "text-ink/70"}`}>
                    <GalleryThumbnailsIcon size={16} />
                    {room.images.length} {room.images.length === 1 ? "photo" : "photos"}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)]">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.62, ease: "easeOut" }}
            className="overflow-hidden rounded-lg border border-forest/10 bg-cream p-3 shadow-soft"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-forest/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeRoom.images[activeImage].src}
                  src={activeRoom.images[activeImage].src}
                  alt={activeRoom.images[activeImage].alt}
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.035 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.985 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="h-full w-full object-cover brightness-[1.04] contrast-[1.05]"
                />
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 bg-gradient-to-t from-deep-forest/95 via-deep-forest/35 to-transparent p-5 text-cream">
                <div>
                  <p className="flex items-center gap-2 text-sm font-bold uppercase text-gold">
                    <GalleryThumbnailsIcon size={16} />
                    Room photo {activeImage + 1} of {activeRoom.images.length}
                  </p>
                  <h3 className="mt-2 font-heading text-4xl font-semibold">{activeRoom.title}</h3>
                </div>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-md bg-gold px-4 py-3 text-sm font-bold uppercase text-deep-forest transition-colors hover:bg-cream"
                >
                  Book Now
                  <ArrowUpRightIcon size={18} />
                </a>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {activeRoom.images.map((image, index) => (
                <motion.button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  className={`focus-ring aspect-[4/3] overflow-hidden rounded-md border transition-colors ${
                    activeImage === index ? "border-gold" : "border-forest/15 hover:border-forest/45"
                  }`}
                >
                  <img src={image.src} alt="" className="h-full w-full object-cover" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.62, ease: "easeOut", delay: 0.06 }}
            className="rounded-lg border border-forest/10 bg-forest p-7 text-cream shadow-card"
          >
            <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-gold/20 text-gold">
              <RockingChairIcon size={28} />
            </div>
            <h3 className="mt-6 font-heading text-4xl font-semibold">{activeRoom.title}</h3>
            <p className="mt-4 text-lg leading-8 text-cream/90">{activeRoom.description}</p>

            <div className="mt-7 grid gap-3">
              {activeRoom.details.map((detail) => (
                <div key={detail} className="flex items-center gap-3 border-t border-cream/15 pt-3">
                  <SparklesIcon size={16} className="shrink-0 text-gold" />
                  <span className="font-semibold text-cream">{detail}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-md bg-cream p-5 text-forest">
              <p className="text-sm font-bold uppercase text-forest/75">Starting rate</p>
              <p className="mt-1 font-heading text-4xl font-semibold">$159</p>
              <p className="text-base font-semibold text-ink/80">per night</p>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12"
        >
          <div className="flex items-center justify-between gap-4 border-t border-forest/10 pt-8">
            <h3 className="font-heading text-3xl font-semibold text-forest">All Room Photos</h3>
           
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {rooms.flatMap((room) =>
              room.images.map((image, index) => (
                <motion.button
                  key={image.src}
                  type="button"
                  onClick={() => {
                    selectRoom(room.slug);
                    setActiveImage(index);
                  }}
                  whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-forest/10 shadow-card"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-forest/95 to-transparent p-4 text-left font-bold text-cream">
                    {room.shortName} {index + 1}
                  </span>
                </motion.button>
              )),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
