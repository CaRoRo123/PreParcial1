"use client";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
}

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md mx-auto mb-6">
      <button type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-black-400 hover:text-gray-600 dark:hover:text-black text-xs font-semibold px-1"
        >
          Random
      </button>
    </div>
  );
}