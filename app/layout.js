import './globals.css';
import { Baloo_2, Space_Grotesk } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const baloo = Baloo_2({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-baloo' });
const grotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap', variable: '--font-grotesk' });

export const metadata = {
  title: 'BE ACT Foundation | Building Action. Building Impact.',
  description:
    'BE ACT Foundation is a modern movement inspiring people to act, create, and contribute through education, empowerment, and community programs.',
  openGraph: {
    title: 'BE ACT Foundation',
    description: 'Modern, energetic NGO empowering communities to act for change.',
    url: 'https://be-act.example.org',
    siteName: 'BE ACT Foundation',
    images: ['/images/hero-abstract.svg'],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BE ACT Foundation',
    description: 'Modern, energetic NGO empowering communities to act for change.',
    images: ['/images/hero-abstract.svg']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${baloo.variable} ${grotesk.variable}`}>
      <body className="bg-cream text-act-green font-body">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
