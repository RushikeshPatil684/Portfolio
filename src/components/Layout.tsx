/**
 * Layout - Global layout wrapper with Navbar, BackgroundParticles, and Footer
 * Used across all pages in the SPA
 */

import type { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundParticles from './BackgroundParticles';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen bg-[#050509] text-white overflow-hidden">
      <BackgroundParticles />
      {/* Toaster for toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0b0f1a',
            color: '#e5f6ff',
            border: '1px solid rgba(56,189,248,0.4)',
            fontSize: '0.85rem',
          },
          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#020617',
            },
          },
          error: {
            iconTheme: {
              primary: '#f97373',
              secondary: '#020617',
            },
          },
        }}
      />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

