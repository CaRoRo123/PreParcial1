import type { Metadata } from 'next';
import { Locale } from '../../lib/dictionary';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js i18n App',
  description: 'Internacionalización en Next.js',
};

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className="p-8 font-sans bg-orange-50 text-gray-900">
        <header className="mb-8 flex gap-4 border-b pb-4 bg-orange-100 ">
          <a href="/es" className="hover:underline text-blue-600">Español</a>
          <a href="/en" className="hover:underline text-blue-600">English</a>

          <a href="/es" className="hover:underline text-red-600 center">Imagen</a>
        </header>
        <main className='bg-orange-100'>{children}</main>
        <footer className="mt-8 border-t pt-4 text-sm text-gray-500">
          &copy; 2024 Next.js i18n App. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
     