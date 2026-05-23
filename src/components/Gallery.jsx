import { motion, useReducedMotion } from "motion/react";
import { gallery } from "../data/gallery.js";

export default function Gallery() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="gallery" className="scroll-mt-28 bg-cream py-24 lg:py-32">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="eyebrow">Gallery</p>
            <h2 className="heading-lg mt-4">A Glimpse of the Riverfront</h2>
          </motion.div>
          <p className="max-w-xl text-lg leading-8 text-ink/85">
            Calm exterior views, forest edges, shared spaces, breakfast moments, and trail
            access around the property.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[210px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <motion.figure
              key={item.caption}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: shouldReduceMotion ? 0 : index * 0.06 }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className={`group relative overflow-hidden rounded-lg bg-forest/10 shadow-card ${item.className}`}
            >
              <img
                src={item.image}
                alt={`${item.caption} at Riverfront Bed & Breakfast`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-deep-forest/92 via-deep-forest/30 to-transparent p-5 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                <span className="rounded-full border border-cream/30 bg-deep-forest/90 px-4 py-2 text-base font-bold text-cream backdrop-blur">
                  {item.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
