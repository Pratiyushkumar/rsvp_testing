import QueryProvider from '@/lib/react-query';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'rsvp | Create, Share and Sell Tickets Easily',
  description:
    'Unlock the power of effortless event planning and management with our intuitive RSVP service. Seamlessly collect attendee responses and track guest lists.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html lang="en">
        <body className={cn(plusJakartaSans.className, 'dark flex min-h-screen flex-col')}>
          {children}
          <Toaster richColors />
        </body>
      </html>
    </QueryProvider>
  );
}
