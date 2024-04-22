import type { Metadata } from 'next';
import FooterSection from './components/FooterSection';
import Mission from './components/Mission';
import NavbarSection from './components/NavbarSection';
import Sidebar from './components/Sidebar';
import './globals.css';
import { adventSans } from './styles/fonts';

export const metadata: Metadata = {
  title: 'Home - Masaka Town Church',
  description:
    'A place where you can find all resources about Seventh-day Adventist Church - Masaka Town.',
  icons: '/images/ming-2.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={adventSans.className}>
        <div className="flex justify-between">
          <div className="flex flex-col w-[88.7%]">
            <NavbarSection />
            {children}
            <Mission />
            <FooterSection />
          </div>
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
