import { motion, useReducedMotion } from "motion/react";
import { CoffeeIcon, RouteIcon, TruckIcon, WavesIcon, WifiIcon } from "lucide-animated";
import { amenities } from "../data/amenities.js";
import riverDivider from "../assets/decor/river-divider.svg";

const icons = {
  wifi: WifiIcon,
  coffee: CoffeeIcon,
  trail: RouteIcon,
  parking: TruckIcon,
  river: WavesIcon,
};

export default function Amenities() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
      },
    },
  };

  const item = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section
      id="amenities"
      className="relative scroll-mt-28 overflow-hidden bg-deep-forest py-20 text-cream lg:py-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(216,181,109,0.13),transparent_34%),linear-gradient(180deg,rgba(14,59,46,0),rgba(8,37,29,0.38))]" />
      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="eyebrow text-gold">Amenities</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-cream sm:text-5xl lg:text-6xl">
              Everything You Need for a Slower Stay
            </h2>
            <img src={riverDivider} alt="" className="mt-6 h-3 w-24" />
          </motion.div>

          <p className="max-w-2xl text-lg font-medium leading-8 text-cream/90 lg:ml-auto">
            Thoughtful essentials, natural surroundings, and practical comforts make the stay
            feel grounded, easy, and quietly premium.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {amenities.map((amenity, index) => {
            const Icon = icons[amenity.icon];
            return (
              <motion.article
                key={amenity.title}
                variants={item}
                whileHover={shouldReduceMotion ? undefined : { y: -6, borderColor: "rgba(216,181,109,0.58)" }}
                className="rounded-lg border border-cream/25 bg-cream/[0.105] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur transition-colors hover:bg-cream/[0.14]"
              >
                <motion.span
                  animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.22 }}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold"
                >
                  <Icon size={24} />
                </motion.span>
                <h3 className="mt-5 font-heading text-2xl font-semibold text-cream">
                  {amenity.title}
                </h3>
                <p className="mt-3 text-[0.98rem] font-medium leading-7 text-cream/85">{amenity.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
