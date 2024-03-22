import '@/app/ui/global.css';
import { lusitana700 } from '@/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana700.className}`}>{children}</body>
    </html>
  );
}
