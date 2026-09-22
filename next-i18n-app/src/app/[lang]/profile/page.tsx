import { getDictionary, Locale } from '../../../lib/dictionary';

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{dict.profile}</h1>
      <p>{dict.welcome}</p>
      <a href={`/${lang}`} className="text-blue-500 hover:underline">
        &larr; Volver
      </a>
    </div>
  );
}