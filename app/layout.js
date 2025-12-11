import './globals.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const display = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

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
    <html lang="en" className={`${display.variable} ${body.variable}`}>
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
