import { motion, useReducedMotion } from "motion/react";
import {
  CalendarCheckIcon,
  CircleDollarSignIcon,
  ClockIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "lucide-animated";
import riverDivider from "../assets/decor/river-divider.svg";

const arrivalPolicies = [
  {
    label: "Check-In",
    value: "3:00 PM",
    icon: CalendarCheckIcon,
  },
  {
    label: "Check-Out",
    value: "12:00 PM",
    icon: ClockIcon,
  },
];

const cancellationPolicies = [
  "The guest can be refunded total price minus 10% administration charge until 7 days before arrival.",
  "The guest will be charged the total price if they cancel in the 7 days before arrival.",
];

export default function Policy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="policy" className="scroll-mt-28 bg-cream py-20 lg:py-28">
      <div className="section-shell">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="eyebrow">Policies</p>
          <h2 className="heading-lg mt-4">Check-In, Guests, and Cancellations</h2>
          <img src={riverDivider} alt="" className="mt-5 h-3 w-24" />
          <p className="body-copy mt-7">
            Riverfront Bed and Breakfast is a small, unique inn with a limited number of rooms.
            Please review the stay policies carefully before booking.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.58, ease: "easeOut" }}
            className="grid gap-5"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {arrivalPolicies.map(({ label, value, icon: Icon }) => (
                <article
                  key={label}
                  className="rounded-lg border border-forest/10 bg-white p-6 shadow-card"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-gold">
                      <Icon size={24} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold uppercase text-forest/75">{label}</h3>
                      <p className="mt-1 font-heading text-4xl font-semibold text-forest">{value}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <article className="rounded-lg border border-gold/35 bg-deep-forest p-6 text-cream shadow-soft">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <UsersIcon size={24} />
                </span>
                <div>
                  <h3 className="font-heading text-3xl font-semibold">Additional Guests</h3>
                  <p className="mt-4 text-lg leading-8 text-cream/90">
                    Our room is to host 2 person. For additional guest, we will charge
                    <span className="font-bold text-gold"> $100 per person per night</span>.
                  </p>
                </div>
              </div>
            </article>
          </motion.div>

          <motion.article
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.58, ease: "easeOut", delay: 0.08 }}
            className="relative overflow-hidden rounded-lg border border-forest/10 bg-white p-6 shadow-soft sm:p-8"
          >
            <motion.div
              aria-hidden="true"
              initial={shouldReduceMotion ? false : { scaleX: 0 }}
              whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="absolute inset-x-0 top-0 h-1 origin-left bg-gold"
            />

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                <ShieldCheckIcon size={28} />
              </span>
              <div>
                <h3 className="font-heading text-4xl font-semibold text-forest">
                  Property and Cancellation Policies
                </h3>
                <div className="mt-5 grid gap-5 text-lg leading-8 text-ink/85">
                  <p>
                    When you&apos;re at the Riverfront B&amp;B, there will be lots of fun and
                    lots of laughter, but the cancellation policy is serious business. Please
                    read it carefully. There will be no exceptions.
                  </p>
                  <p>
                    Riverfront Bed and Breakfast is a small, unique inn with a limited number
                    of rooms. We do not overbook like many large hotels so cancellations can
                    affect the success of our business. For this reason, we have the following
                    cancellation policy:
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {cancellationPolicies.map((policy) => (
                <div
                  key={policy}
                  className="flex gap-4 rounded-lg border border-forest/10 bg-cream p-5"
                >
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest text-gold">
                    <CircleDollarSignIcon size={18} />
                  </span>
                  <p className="text-lg font-semibold leading-8 text-ink">{policy}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
