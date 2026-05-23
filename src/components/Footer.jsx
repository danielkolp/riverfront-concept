import { MailCheckIcon, MapPinIcon, MessageCircleIcon } from "lucide-animated";
import logo from "../assets/logos/riverfront-logo-horizontal.svg";

export default function Footer() {
  return (
    <footer className="bg-deep-forest text-cream">
      <div className="section-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.8fr]">
          <div>
            <a href="#home" className="focus-ring inline-flex rounded-sm">
              <img src={logo} alt="Riverfront Bed & Breakfast" className="h-auto w-80 max-w-full" />
            </a>
            <p className="mt-5 max-w-sm text-base leading-8 text-cream/85">
              A warm riverside stay in North Vancouver, shaped by forest, quiet water, and
              thoughtful hospitality.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold uppercase text-gold">Address</h2>
            <p className="mt-4 text-base leading-8 text-cream/90">
              1327 Riverside Drive
              <br />
              North Vancouver, British Columbia
              <br />
              Canada V7H 1V6
            </p>
            <a
              href="https://maps.google.com/?q=1327+Riverside+Drive+North+Vancouver+British+Columbia+Canada+V7H+1V6"
              className="focus-ring mt-4 inline-flex items-center gap-2 rounded-sm text-base font-semibold text-gold hover:text-cream"
            >
              <MapPinIcon size={18} />
              View Map
            </a>
          </div>

          <div>
            <h2 className="text-base font-bold uppercase text-gold">Contact</h2>
            <div className="mt-4 grid gap-3 text-base leading-7 text-cream/90">
              <a className="focus-ring inline-flex items-center gap-2 rounded-sm hover:text-gold" href="tel:17789299565">
                <MessageCircleIcon size={18} />
                778.929.9565
              </a>
              <a
                className="focus-ring inline-flex items-center gap-2 rounded-sm hover:text-gold"
                href="mailto:myxsun@gmail.com"
              >
                <MailCheckIcon size={18} />
                myxsun@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-base font-bold uppercase text-gold">Arrival</h2>
            <dl className="mt-4 grid gap-3 text-base leading-7 text-cream/90">
              <div>
                <dt className="font-semibold text-cream">Check-in</dt>
                <dd>3:00 PM &ndash; 8:00 PM</dd>
              </div>
              <div>
                <dt className="font-semibold text-cream">Check-out</dt>
                <dd>12:00 PM</dd>
              </div>
            </dl>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col gap-4 border-t border-cream/20 pt-6 text-base text-cream/80 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p>&copy; {new Date().getFullYear()} Riverfront Bed & Breakfast. All rights reserved.</p>
            <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-cream/65">
              Demo project prepared for client review. Content, availability, and booking
              details should be confirmed by Riverfront Bed & Breakfast before public use.
            </p>
          </div>
          <div className="flex gap-5">
            <a href="#policy" className="focus-ring rounded-sm hover:text-gold">
              Privacy Policy
            </a>
            <a href="#policy" className="focus-ring rounded-sm hover:text-gold">
              Terms of Stay
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
