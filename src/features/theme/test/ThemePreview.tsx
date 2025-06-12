import React from 'react';

const colors = [
  { name: '--color-bg', label: 'Background' },
  { name: '--color-surface', label: 'Surface' },
  { name: '--color-text', label: 'Text' },
  { name: '--color-muted', label: 'Muted' },
  { name: '--color-primary', label: 'Primary' },
  { name: '--color-accent', label: 'Accent' },
  { name: '--color-border', label: 'Border' },
];

export const ThemePreview: React.FC = () => {
  return (
    <div className="grid gap-4 p-6 sm:grid-cols-2 md:grid-cols-3 bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen">
      {colors.map(({ name, label }) => (
        <div
          key={name}
          className="rounded-xl border border-[var(--color-border)] shadow-sm"
          style={{ backgroundColor: `var(${name})` }}
        >
          <div className="p-4">
            <div className="text-sm font-semibold">{label}</div>
            <div className="text-xs opacity-80">{name}</div>
            <div className="mt-2 text-sm">Sample text on {label.toLowerCase()}.</div>
          </div>
        </div>
      ))}

      {/* Пример кнопки */}
      <div className="p-4 col-span-full">
        <button
          className="px-4 py-2 rounded-md"
          style={{
            backgroundColor: 'var(--color-button-bg)',
            color: 'var(--color-button-text)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-button-hover-bg)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-button-bg)';
          }}
        >
          Primary Button
        </button>
      </div>

      {/* Пример ссылки */}
      <div className="p-4 col-span-full">
        <a
          href="#"
          className="underline"
          style={{
            color: 'var(--color-link)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = 'var(--color-link-hover)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'var(--color-link)';
          }}
        >
          Example link
        </a>
      </div>
    </div>
  );
};
