import Link from 'next/link';
import Mascot from './Mascot';

export default function Footer() {
  return (
    <footer className="bg-ink text-cream mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-act-green text-cream flex items-center justify-center font-heading text-lg shadow-card">
              BE
            </div>
            <div className="leading-tight">
              <p className="font-heading text-lg tracking-tight">BE ACT Foundation</p>
              <p className="text-cream/70 text-sm">Building Action. Building Impact.</p>
            </div>
          </div>
          <p className="text-cream/70 text-sm leading-relaxed max-w-sm">
            A calm, premium home for people who believe in equitable education, dignified livelihoods, and clean, thriving neighbourhoods.
          </p>
          <div className="flex gap-2 text-ink">
            <a className="w-9 h-9 rounded-lg bg-be-yellow flex items-center justify-center font-semibold">f</a>
            <a className="w-9 h-9 rounded-lg bg-be-yellow flex items-center justify-center font-semibold">in</a>
            <a className="w-9 h-9 rounded-lg bg-be-yellow flex items-center justify-center font-semibold">ig</a>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-4">Quick Links</h4>
          <div className="space-y-2 text-cream/80">
            <Link href="/about">About Us</Link>
            <Link href="/programs" className="block">Programs</Link>
            <Link href="/involve" className="block">Donate / Involve</Link>
            <Link href="/gallery" className="block">Gallery</Link>
            <Link href="/contact" className="block">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-4">Legal</h4>
          <div className="space-y-2 text-cream/80">
            <Link href="/privacy-policy" className="block">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="block">
              Terms and Conditions
            </Link>
            <Link href="/donation-refund-policy" className="block">
              Donation and Refund Policy
            </Link>
            <Link href="/csr-partnership-policy" className="block">
              CSR Partnership Policy
            </Link>
          </div>
        </div>
        <div className="relative">
          <Mascot className="absolute -top-6 right-0" />
          <h4 className="font-heading text-lg mb-3">Stay in the loop</h4>
          <p className="text-cream/70 text-sm mb-4">Sign up to know about new actions, programs, and community stories.</p>
          <form className="flex bg-white/10 rounded-lg p-1">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 rounded-md text-ink focus:outline-none"
              required
            />
            <button type="submit" className="px-4 bg-be-yellow text-ink font-semibold rounded-md ml-2">
              Go
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-cream/10 text-center py-4 text-cream/70 text-sm">
        © {new Date().getFullYear()} BE ACT Foundation. All rights reserved.
      </div>
    </footer>
  );
}
