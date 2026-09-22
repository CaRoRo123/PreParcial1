import Link from "next/link";
import { notFound } from "next/navigation";
import {card} from "@/components/CardItem";
async function getDictionary(lang: string) {
  try {
    return (await import(`@/dictionaries/${lang}.json`)).default;
  } catch {
    return (await import("@/dictionaries/es.json")).default;
  }
}

interface PageProps {
  params: Promise<{
    lang: string;
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { lang, id } = await params;
  const dict = await getDictionary(lang);

  // Fetch individual por ID
  const res = await fetch(`https://dog.ceo/api/breed/${id}/images/random`);



  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 py-10">
      <div >
        <card 
        key={id}
        image={`https://dog.ceo/api/breed/${id}/images/random`}
        />
      </div>
    </main>
  );
}