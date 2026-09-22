import Grid from "@/components/Grid";
import { ItemData } from "@/types/item";

// Función básica para leer el archivo del idioma actual
async function getDictionary(lang: string) {
  return (await import(`@/dictionaries/${lang}.json`)).default;
}

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
 
  // Consumo de la API en el parcial
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  const perros = await res.json();
  const items: ItemData[] = Object.keys(perros.message).map((breed) => ({
    id: breed,
    title: breed,
    description: `Raza de perro: ${breed}`,
    image: `https://dog.ceo/api/breed/${breed}/images/random`,
  }));

  return (
    <main className="min-h-screen p-6">
      <Grid items={items} lang={lang} dict={dict.grid} />
    </main>
  );
}