
import './global.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'NuviX',
  description: 'Your personal credit risk analyzer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}