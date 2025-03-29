
import './global.css';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/app/context/AuthContext';

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
          <AuthProvider>
          {children}
          </AuthProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}