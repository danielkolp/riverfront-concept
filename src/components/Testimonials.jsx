import { motion, useReducedMotion } from "motion/react";
import { MessageSquareMoreIcon } from "lucide-animated";
import riverDivider from "../assets/decor/river-divider.svg";

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="section-shell">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-lg border border-forest/10 bg-cream p-8 shadow-soft sm:p-12"
        >
          <motion.div
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
            className="absolute inset-x-0 top-0 h-1 origin-left bg-gold"
          />
          <div className="absolute right-8 top-8 text-gold/20">
            <MessageSquareMoreIcon size={80} />
          </div>
          <p className="eyebrow">Guest Words</p>
          <img src={riverDivider} alt="" className="mt-5 h-3 w-24" />
          <blockquote className="relative mt-8 font-heading text-3xl font-semibold leading-snug text-forest sm:text-4xl">
            "A beautiful location with amazing hosts. The views are incredible and the
            breakfast was delicious."
          </blockquote>
          <p className="mt-7 text-base font-bold text-ink/85">&mdash; Sarah M.</p>
          <div className="mt-8 flex gap-2">
            <span className="h-2.5 w-8 rounded-full bg-forest" />
            <span className="h-2.5 w-2.5 rounded-full bg-forest/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-forest/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
