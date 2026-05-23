import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-animated";
import botanicalLineArt from "../assets/decor/botanical-line-art.svg";
import riverDivider from "../assets/decor/river-divider.svg";

const slides = [
  {
    src: "/images/Riverfront-1.jpg",
    alt: "Riverfront Bed & Breakfast guest dining room with garden views",
  },
  {
    src: "/images/breakfast.jpg",
    alt: "Breakfast served at Riverfront Bed & Breakfast",
  },
  {
    src: "/images/Riverfront-23.jpg",
    alt: "Riverfront Bed & Breakfast bedroom with fresh linens",
  },
];

export default function About() {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const showPrevious = () => setActive((value) => (value === 0 ? slides.length - 1 : value - 1));
  const showNext = () => setActive((value) => (value + 1) % slides.length);

  return (
    <section id="about" className="relative overflow-hidden bg-cream py-20 scroll-mt-28 lg:py-28">
      <img
        src={botanicalLineArt}
        alt=""
        className="pointer-events-none absolute -left-24 top-16 hidden w-96 opacity-[0.08] md:block"
      />
      <img
        src={botanicalLineArt}
        alt=""
        className="pointer-events-none absolute -right-16 bottom-8 hidden w-80 rotate-180 opacity-[0.08] lg:block"
      />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.15fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="eyebrow">Welcome</p>
          <h2 className="heading-lg mt-4">Your Riverside Retreat Awaits</h2>
          <img src={riverDivider} alt="" className="mt-5 h-3 w-24" />
          <div className="mt-7 grid gap-5">
            <p className="body-copy">
              Come home to tranquility as you enter our riverfront property. Peaceful and
              serene, you will enjoy your stay with us. The area is known for its world-class
              hiking and biking trails.
            </p>
            <p className="body-copy">
              Despite living in the heart of nature, you are only 20 minutes to downtown,
              10 minutes to the beauty of Deep Cove, and 5 minutes to shopping. Ski hills,
              golf, restaurants, and theaters are all within a 15 minute drive.
            </p>
            <p className="body-copy">
              Let the sound of running water soothe your mind while you dream away.
            </p>
          </div>
          <motion.a
            href="#contact"
            whileHover={shouldReduceMotion ? undefined : { x: 3 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="focus-ring mt-9 inline-flex items-center gap-3 rounded-md bg-forest px-6 py-4 text-base font-bold uppercase text-cream shadow-card transition-colors hover:bg-deep-forest"
          >
            Learn More
            <ArrowRightIcon size={18} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, clipPath: "inset(8% 8% 8% 8%)" }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-lg border border-forest/10 bg-white p-3 shadow-soft">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-forest/10 sm:aspect-[16/10]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slides[active].src}
                  src={slides[active].src}
                  alt={slides[active].alt}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
              <motion.div
                aria-hidden="true"
                initial={shouldReduceMotion ? false : { x: "-120%" }}
                whileInView={shouldReduceMotion ? undefined : { x: "120%" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.3, ease: "easeInOut", delay: 0.35 }}
                className="absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-deep-forest/92 via-deep-forest/30 to-transparent p-4 text-cream">
                <span className="text-base font-semibold">Breakfast, garden light, and quiet rooms</span>
                <span className="text-base font-semibold text-cream">
                  {active + 1} / {slides.length}
                </span>
              </div>
            </div>
          </div>

          <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between">
            <motion.button
              type="button"
              aria-label="Previous image"
              onClick={showPrevious}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-deep-forest/90 text-cream shadow-card backdrop-blur transition-colors hover:bg-forest"
            >
              <ChevronLeftIcon size={20} />
            </motion.button>
            <motion.button
              type="button"
              aria-label="Next image"
              onClick={showNext}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-deep-forest/90 text-cream shadow-card backdrop-blur transition-colors hover:bg-forest"
            >
              <ChevronRightIcon size={20} />
            </motion.button>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show image ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${
                  active === index ? "w-8 bg-forest" : "w-2.5 bg-forest/35 hover:bg-forest/60"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
