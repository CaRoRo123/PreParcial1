import { getDictionary, Locale } from '../../lib/dictionary';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{dict.welcome}</h1>
      <p className="text-gray-600">{dict.description}</p>
      <a
        href={`/${lang}/profile`}
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {dict.profile}
      </a>
    </div>
  );
}