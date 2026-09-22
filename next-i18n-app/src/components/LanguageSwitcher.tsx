'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLang: string) => {
    // Guardar la cookie de persistencia por 1 año
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`;

    // Reemplazar el prefijo en la URL actual
    const segments = pathname.split('/');
    segments[1] = newLang;
    const newPath = segments.join('/');

    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('es')}
        className={`px-3 py-1 rounded ${currentLang === 'es' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded ${currentLang === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        EN
      </button>
    </div>
  );
}