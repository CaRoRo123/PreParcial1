"use client";

import { useState, useMemo } from "react";
import { ItemData } from "@/types/item";
import CardItem from "./CardItem";
import SearchBar from "./SearchBar";

interface GridDictionary {
  searchPlaceholder: string;
  noResults: string;
  noImage?: string;
}

interface GridProps {
  items: ItemData[];
  lang: string;
  dict: GridDictionary;
}

export default function Grid({ items, lang, dict }: GridProps) {
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    if (!search.trim()) return items;
    const term = search.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(term) ||
        item.description?.toLowerCase().includes(term)
    );
  }, [items, search]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-6 bg-white-900 rounded-xl shadow-md">
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder={dict.searchPlaceholder}
      />

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <CardItem
              key={item.id}
              item={item}
              lang={lang}
              noImageText={dict.noImage}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-500 dark:text-gray-400">
          {dict.noResults}
        </div>
      )}
    </section>
  );
}