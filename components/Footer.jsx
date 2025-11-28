import Link from 'next/link';
import Mascot from './Mascot';

export default function Footer() {
  return (
    <footer className="bg-act-green text-cream mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-be-yellow text-act-green flex items-center justify-center font-heading text-xl shadow-card">
              BE
            </div>
            <div>
              <p className="font-heading text-lg">BE ACT Foundation</p>
              <p className="text-cream/70 text-sm">Building Action. Building Impact.</p>
            </div>
          </div>
          <p className="text-cream/70 text-sm leading-relaxed">
            A youthful movement empowering people to act, create, and contribute to brighter communities.
          </p>
          <div className="flex space-x-3 text-act-green">
            <a className="w-9 h-9 rounded-full bg-be-yellow flex items-center justify-center font-bold">f</a>
            <a className="w-9 h-9 rounded-full bg-be-yellow flex items-center justify-center font-bold">in</a>
            <a className="w-9 h-9 rounded-full bg-be-yellow flex items-center justify-center font-bold">ig</a>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-3">Quick Links</h4>
          <div className="space-y-2 text-cream/80">
            <Link href="/about">About Us</Link>
            <Link href="/programs" className="block">Programs</Link>
            <Link href="/get-involved" className="block">Get Involved</Link>
            <Link href="/gallery" className="block">Gallery</Link>
            <Link href="/contact" className="block">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-3">NGO Details</h4>
          <p className="text-cream/70 text-sm leading-relaxed">
            Registration No. : 00-000-0000
            <br />
            123 Impact Street, Inspire City
            <br />
            contact@beact.org
          </p>
        </div>
        <div className="relative">
          <Mascot className="absolute -top-6 right-0" />
          <h4 className="font-heading text-lg mb-3">Stay in the loop</h4>
          <p className="text-cream/70 text-sm mb-4">Sign up to know about new actions, programs, and community stories.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-l-2xl text-act-green focus:outline-none"
              required
            />
            <button type="submit" className="px-4 bg-be-yellow text-act-green font-bold rounded-r-2xl">
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
