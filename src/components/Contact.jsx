import { motion, useReducedMotion } from "motion/react";
import { MailCheckIcon, MapPinHouseIcon, MapPinIcon, MessageCircleIcon } from "lucide-animated";
import riverDivider from "../assets/decor/river-divider.svg";

const addressLines = [
  "Riverfront Bed and Breakfast",
  "1327 Riverside Drive",
  "North Vancouver, British Columbia",
  "Canada V7H 1V6",
];

const mapQuery =
  "1327 Riverside Drive, North Vancouver, British Columbia, Canada V7H 1V6";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="scroll-mt-28 bg-white py-20 lg:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.62, ease: "easeOut" }}
            className="rounded-lg border border-forest/10 bg-cream p-7 shadow-soft sm:p-9"
          >
            <p className="eyebrow">Contact</p>
            <h2 className="heading-lg mt-4">Plan Your Stay by the River</h2>
            <img src={riverDivider} alt="" className="mt-5 h-3 w-24" />
            <p className="body-copy mt-7">
              Reach out directly for room availability, stay questions, or help planning your
              visit to North Vancouver.
            </p>

            <div className="mt-9 grid gap-4">
              <article className="rounded-lg border border-forest/10 bg-white p-5">
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest text-gold">
                    <MapPinHouseIcon size={24} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold uppercase text-forest/75">Address</h3>
                    <address className="mt-3 not-italic text-lg leading-8 text-ink">
                      {addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </div>
              </article>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="tel:17789299565"
                  className="focus-ring group rounded-lg border border-forest/10 bg-white p-5 transition-colors hover:border-gold"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-gold">
                    <MessageCircleIcon size={22} />
                  </span>
                  <span className="mt-4 block text-sm font-bold uppercase text-forest/75">Calls</span>
                  <span className="mt-1 block text-xl font-bold text-forest">778.929.9565</span>
                </a>

                <a
                  href="mailto:myxsun@gmail.com"
                  className="focus-ring group rounded-lg border border-forest/10 bg-white p-5 transition-colors hover:border-gold"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-gold">
                    <MailCheckIcon size={22} />
                  </span>
                  <span className="mt-4 block text-sm font-bold uppercase text-forest/75">Email</span>
                  <span className="mt-1 block break-all text-xl font-bold text-forest">
                    myxsun@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.68, ease: "easeOut", delay: 0.08 }}
            className="overflow-hidden rounded-lg border border-forest/10 bg-deep-forest p-3 shadow-soft"
          >
            <div className="flex items-center justify-between gap-4 px-3 py-3 text-cream">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <MapPinIcon size={22} />
                </span>
                <div>
                  <h3 className="font-heading text-2xl font-semibold">Find Riverfront B&amp;B</h3>
                  <p className="text-sm font-semibold text-cream/75">1327 Riverside Drive</p>
                </div>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="focus-ring hidden rounded-full border border-gold/60 px-4 py-2 text-sm font-bold uppercase text-gold transition-colors hover:bg-gold hover:text-deep-forest sm:inline-flex"
              >
                Open Map
              </a>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-md bg-cream lg:aspect-auto lg:h-[620px]">
              <iframe
                title="Google map showing Riverfront Bed and Breakfast at 1327 Riverside Drive, North Vancouver"
                src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
