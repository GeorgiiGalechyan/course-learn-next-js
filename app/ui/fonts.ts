import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const lusitana400 = Lusitana({ subsets: ['latin'], weight: '400' });
export const lusitana700 = Lusitana({ subsets: ['latin'], weight: '700' });
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700']});
