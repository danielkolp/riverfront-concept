import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { FeatherIcon, HomeIcon, RouteIcon, WavesIcon } from "lucide-animated";
import BookingCard from "./BookingCard.jsx";
import { bookingUrl } from "../data/booking.js";
import { imagePath } from "../data/imagePath.js";
import riverDivider from "../assets/decor/river-divider.svg";

const heroImages = [
  {
    src: imagePath("/images/Riverfront-1.jpg"),
    alt: "Riverfront Bed & Breakfast dining room with garden views",
    position: "object-center",
  },
  {
    src: imagePath("/images/Riverfront-23.jpg"),
    alt: "Riverfront Bed & Breakfast bedroom with fresh linens",
    position: "object-center",
  },
  {
    src: imagePath("/images/breakfast.jpg"),
    alt: "Breakfast served at Riverfront Bed & Breakfast",
    position: "object-center",
  },
];

const valueItems = [
  { label: "Riverfront Location", icon: WavesIcon },
  { label: "Hiking & Biking Trails", icon: RouteIcon },
  { label: "Minutes to Downtown", icon: HomeIcon },
  { label: "Relax & Unwind", icon: FeatherIcon },
];

export default function Hero() {
  const [activeHero, setActiveHero] = useState(0);
  const valueIconRefs = useRef([]);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, 38]);
  const imageScale = useTransform(scrollY, [0, 600], [1, 1.025]);

  useEffect(() => {
    if (shouldReduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroImages.length);
    }, 5600);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  const textContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const textItem = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
  };

  const valueContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.45,
      },
    },
  };

  const valueCard = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const startValueIcon = (index) => {
    if (shouldReduceMotion) return;
    valueIconRefs.current[index]?.startAnimation();
  };

  const stopValueIcon = (index) => {
    if (shouldReduceMotion) return;
    valueIconRefs.current[index]?.stopAnimation();
  };

  return (
    <section id="home" className="relative isolate min-h-[850px] scroll-mt-28 pt-28 text-cream sm:min-h-[820px]">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={heroImages[activeHero].src}
            src={heroImages[activeHero].src}
            alt={heroImages[activeHero].alt}
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 1.15, ease: "easeOut" }}
            style={shouldReduceMotion ? undefined : { y: imageY, scale: imageScale }}
            className={`h-full w-full object-cover ${heroImages[activeHero].position} brightness-[1.16] contrast-[1.12] saturate-[1.08]`}
          />
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep-forest via-deep-forest/65 to-deep-forest/10" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,37,29,0.10)_0%,rgba(8,37,29,0.24)_58%,rgba(8,37,29,0.48)_100%)]" />
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
        className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10 h-28 text-gold/55"
      >
        <svg viewBox="0 0 1440 180" className="h-full w-full" preserveAspectRatio="none">
          <motion.path
            d="M-40 86 C 120 18, 272 146, 446 72 S 770 48, 948 94 1240 148 1462 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="10 18"
            animate={shouldReduceMotion ? undefined : { strokeDashoffset: [0, -112] }}
            transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M-20 122 C 180 72, 290 158, 520 112 S 846 88, 1060 128 1240 156 1458 96"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 20"
            animate={shouldReduceMotion ? undefined : { strokeDashoffset: [0, 104] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </motion.div>

      <div className="section-shell grid gap-10 pb-24 pt-16 lg:grid-cols-[minmax(0,1fr)_500px] lg:items-center lg:pb-20 lg:pt-24 xl:grid-cols-[minmax(0,1fr)_540px]">
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p variants={textItem} className="text-shadow-soft font-heading text-2xl font-semibold text-gold">
            Welcome to Riverfront
          </motion.p>

          <motion.h1 variants={textItem} className="heading-xl text-shadow-lodge mt-5">
            Escape to Nature.
            <span className="mt-2 block text-gold">Stay by the River.</span>
          </motion.h1>

          <motion.img
            variants={textItem}
            src={riverDivider}
            alt=""
            className="mt-6 h-3 w-24"
          />

          <motion.p variants={textItem} className="text-shadow-soft mt-7 max-w-2xl text-xl font-medium leading-9 text-cream">
            Come home to tranquility as you enter our riverfront property. Peaceful and
            serene, you will enjoy your stay with us.
          </motion.p>

          <motion.div
            variants={textItem}
            className="text-shadow-soft mt-6 max-w-2xl border-l-2 border-gold bg-deep-forest/80 px-5 py-4 text-lg font-medium leading-8 text-cream shadow-[0_14px_35px_rgba(8,37,29,0.28)] backdrop-blur-sm"
          >
            World-class hiking and biking trails, Deep Cove, shopping, ski hills, golf,
            restaurants, and theaters are all close by.
          </motion.div>

          <motion.div variants={textItem} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={shouldReduceMotion ? undefined : { y: -3, boxShadow: "0 18px 42px rgba(216,181,109,0.34)" }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="focus-ring inline-flex justify-center rounded-full bg-gold px-7 py-4 text-base font-bold uppercase text-deep-forest shadow-gold transition-colors hover:bg-cream"
            >
              Book Now
            </motion.a>
            <motion.a
              href="#rooms"
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="focus-ring inline-flex justify-center rounded-full border border-cream/80 bg-deep-forest/45 px-7 py-4 text-base font-bold uppercase text-cream shadow-[0_10px_25px_rgba(8,37,29,0.18)] transition-colors hover:border-gold hover:text-gold"
            >
              Explore Rooms
            </motion.a>
          </motion.div>

          <motion.div
            variants={valueContainer}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:max-w-2xl"
          >
            {valueItems.map(({ label, icon: Icon }, index) => (
              <motion.div
                key={label}
                variants={valueCard}
                onHoverStart={() => startValueIcon(index)}
                onHoverEnd={() => stopValueIcon(index)}
                whileHover={shouldReduceMotion ? undefined : { y: -4, borderColor: "rgba(216,181,109,0.72)" }}
                className="group rounded-lg border border-cream/35 bg-deep-forest/75 p-4 shadow-[0_12px_30px_rgba(8,37,29,0.2)] backdrop-blur-sm"
              >
                <Icon
                  ref={(node) => {
                    valueIconRefs.current[index] = node;
                  }}
                  size={28}
                  className="text-gold"
                />
                <p className="mt-3 text-[0.95rem] font-bold uppercase leading-snug text-cream">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative lg:translate-y-4">
          <BookingCard />
        </div>
      </div>

      <div className="section-shell pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 justify-end lg:flex">
        <div className="flex gap-2">
          {heroImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show hero image ${index + 1}`}
              onClick={() => setActiveHero(index)}
              className={`pointer-events-auto h-1.5 rounded-full transition-all ${
                activeHero === index ? "w-10 bg-gold" : "w-5 bg-cream/70 hover:bg-cream"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
