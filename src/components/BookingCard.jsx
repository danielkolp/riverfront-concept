import { motion, useReducedMotion } from "motion/react";
import {
  CalendarDaysIcon,
  CircleDollarSignIcon,
  LockKeyholeIcon,
  ShieldCheckIcon,
} from "lucide-animated";
import { bookingUrl } from "../data/booking.js";

const trustItems = [
  { label: "Best Rate Guarantee", icon: CircleDollarSignIcon },
  { label: "Secure Booking", icon: LockKeyholeIcon },
  { label: "No Hidden Fees", icon: ShieldCheckIcon },
];

export default function BookingCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.aside
      id="booking"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      className="relative w-full overflow-hidden rounded-lg border border-gold/30 bg-[#fffaf0] p-6 shadow-[0_28px_85px_rgba(8,37,29,0.28)] ring-1 ring-forest/10 md:p-8"
    >
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { x: "-100%" }}
        animate={shouldReduceMotion ? undefined : { x: "100%" }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 2.4 }}
        className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-gold to-transparent"
      />
      <div className="mb-7 flex items-start justify-between gap-5">
        <div>
          <p className="eyebrow text-forest">Direct Booking</p>
          <h2 className="mt-2 font-heading text-4xl font-semibold leading-none text-deep-forest">
            Book Your Stay
          </h2>
          <p className="mt-4 text-base font-semibold leading-7 text-ink/80">
            Complete your reservation securely through our booking portal.
          </p>
        </div>
        <div className="rounded-full bg-forest/10 p-3.5 text-forest">
          <CalendarDaysIcon size={24} />
        </div>
      </div>

      <div className="grid gap-5">
        <motion.a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          whileHover={shouldReduceMotion ? undefined : { y: -2, boxShadow: "0 18px 40px rgba(8,37,29,0.24)" }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          className="focus-ring mt-2 inline-flex justify-center rounded-md bg-deep-forest px-6 py-[1.125rem] text-base font-bold uppercase text-cream shadow-gold transition-colors hover:bg-forest"
        >
          Book Now
        </motion.a>
      </div>

      <div className="mt-6 grid gap-3.5 border-t border-forest/10 pt-6 sm:grid-cols-3">
        {trustItems.map(({ label, icon: Icon }) => (
          <div key={label} className="flex items-center gap-2.5 text-base font-bold leading-snug text-ink">
            <Icon size={20} className="shrink-0 text-forest" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </motion.aside>
  );
}
