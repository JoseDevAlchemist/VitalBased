const icons = {
  "doctors-home-visits": ["blue", "M5 3H3v5a5 5 0 0 0 10 0V3h-2m-3 10v3a4 4 0 0 0 8 0v-3m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 2v2m6-2v2"],
  "24-hour-nursing-care": ["red", "M20.8 5.8a5 5 0 0 0-7.1 0L12 7.5l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-8.1a5 5 0 0 0 0-7.1ZM3 12h5l2-3 3 6 2-3h6"],
  "laboratory-tests": ["purple", "M8 3h8m-7 0v7l-5 8a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-8V3M7 14h10"],
  "physiotherapy": ["teal", "M16 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-4 4-3 4-4 1m7-5 4 3 4-1m-8-2-1 8 4 2 2 4m-6-6-4 4H3"],
  "diagnostic-services": ["blue", "M3 5h18v13H3zM8 22h8m-4-4v4M5 12h4l2-4 3 7 2-3h3"],
  "health-education": ["amber", "M12 6c-2-2-6-3-9-2v14c3-1 7 0 9 2 2-2 6-3 9-2V4c-3-1-7 0-9 2v14M6 8l3 1m-3 3 3 1"],
  "maternal-neonatal-care": ["purple", "M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm-6 15v-6a6 6 0 0 1 10-4m4 3a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-7 4c2-3 7-3 10-1l-1 4H9l1-3Z"],
  "palliative-care": ["red", "M12 13 6.5 8a3.5 3.5 0 0 1 5-5l.5.6.5-.6a3.5 3.5 0 0 1 5 5L12 13Zm-9 4h4l4 2h4l5-3a1.4 1.4 0 0 1 1.5 2.3L16 22H9l-6-2"],
  "basic-first-aid": ["red", "M3 8h18v12H3zm6 0V4h6v4m-3 3v6m-3-3h6"],
  "outreach-services": ["green", "M12 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-6 11v-2a6 6 0 0 1 12 0v2M4 5a2 2 0 0 0 0 4m16-4a2 2 0 0 1 0 4M2 17v-2a3 3 0 0 1 3-3m17 5v-2a3 3 0 0 0-3-3"],
  "ambulance-services": ["red", "M2 5h13v13H2zm13 4h4l3 4v5h-7M6 9h5m-2.5-2.5v5M5 18a2 2 0 1 0 4 0m8 0a2 2 0 1 0 4 0"],
  "caregiver-support": ["green", "m2 15 4-4 5 2h3a2 2 0 0 1 0 4h-4m6-2 4-3a1.5 1.5 0 0 1 2 2l-6 6H8l-6-3m12-8 2-3 2 3m-2-3V3"],
  "post-surgery-care": ["amber", "m5 14 9-9a3.5 3.5 0 0 1 5 5l-9 9a3.5 3.5 0 0 1-5-5Zm4-4 5 5m-3-7 5 5m-4-2h.01m-2 2h.01m4-4h.01"],
  "medical-equipment": ["blue", "M3 5v16m18-5v5M3 16h18v-3a3 3 0 0 0-3-3h-8v6m-7-4h7m-3-4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"],
} as const satisfies Record<string, readonly [string, string]>;

export function ServiceIcon({ slug }: { slug: keyof typeof icons }) {
  const [colour, path] = icons[slug];
  return (
    <svg className="service-icon" data-colour={colour} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={path} />
    </svg>
  );
}
