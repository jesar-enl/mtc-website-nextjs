import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from './components/Sidebar';
import './globals.css';
import NavbarSection from './components/NavbarSection';
import FooterSection from './components/FooterSection';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Masaka Town Church',
  description:
    'A place where you can find all resources about Seventh-day Adventist Church - Masaka Town.',
    icons: '/images/ming.png'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between">
          <div className="flex flex-col w-[88.7%]">
            <NavbarSection />
            {children}
            <FooterSection />
          </div>
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
