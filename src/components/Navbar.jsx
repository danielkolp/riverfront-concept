import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { CalendarCheckIcon, MenuIcon, XIcon } from "lucide-animated";
import { bookingUrl } from "../data/booking.js";
import mark from "../assets/logos/riverfront-mark.svg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Policy", href: "#policy" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(8, 37, 29, 0.94)", "rgba(8, 37, 29, 0.985)"],
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(8,37,29,0)", "0 18px 45px rgba(8,37,29,0.24)"],
  );

  return (
    <motion.header
      style={{ backgroundColor, boxShadow }}
      className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 backdrop-blur-xl"
    >
      <nav className="section-shell flex h-24 items-center justify-between gap-6 lg:h-28">
        <a href="#home" className="focus-ring flex items-center gap-4 rounded-sm">
          <img src={mark} alt="" className="h-[3.25rem] w-[3.25rem] shrink-0 sm:h-14 sm:w-14" />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-3xl font-semibold text-cream sm:text-4xl">
              Riverfront
            </span>
            <span className="mt-1.5 text-[0.78rem] font-bold uppercase text-gold sm:text-sm">
              Bed & Breakfast
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={shouldReduceMotion ? undefined : { y: -1 }}
              className="focus-ring group relative rounded-sm text-[0.95rem] font-bold uppercase text-cream drop-shadow-sm transition-colors hover:text-gold"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </motion.a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <motion.a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-gold/65 px-5 py-3 text-[0.95rem] font-bold uppercase text-cream transition-colors hover:bg-gold hover:text-deep-forest"
          >
            <CalendarCheckIcon size={18} />
            Book Now
          </motion.a>
        </div>

        <motion.button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream lg:hidden"
        >
          {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden border-t border-cream/10 bg-deep-forest/95 lg:hidden"
          >
            <div className="section-shell grid gap-2 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-1 py-3 text-base font-semibold uppercase text-cream/85 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-base font-bold uppercase text-deep-forest"
              >
                <CalendarCheckIcon size={18} />
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
