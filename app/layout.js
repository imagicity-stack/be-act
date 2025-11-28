import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-poppins' });

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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
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
