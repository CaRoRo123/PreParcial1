"use client";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
}

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md mx-auto mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-zinc-900 text-black dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white text-xs font-semibold px-1"
        >
          ✕
        </button>
      )}
    </div>
  );
}