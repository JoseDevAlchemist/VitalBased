type IconProps = { className?: string };

export function WhatsAppIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none"><path d="M20.5 3.5A10.5 10.5 0 0 0 4.04 16.2L3 21l4.9-1.02A10.5 10.5 0 1 0 20.5 3.5Z" fill="currentColor"/><path d="M8.25 7.4c.18-.4.38-.4.7-.4h.5c.16 0 .36.06.46.34l.7 1.65c.1.23.06.4-.08.6l-.5.63c-.12.15-.24.3-.1.55.15.25.66 1.08 1.42 1.74.98.85 1.8 1.1 2.05 1.22.26.12.4.1.55-.08l.7-.83c.17-.2.34-.17.58-.1l1.56.75c.24.12.4.18.46.3.06.12.06.7-.17 1.3-.24.6-1.14 1.1-1.56 1.14-.4.04-.9.2-2.94-.6-2.5-.98-4.1-3.5-4.23-3.66-.12-.16-1-1.34-1-2.56 0-1.2.62-1.78.9-2.05Z" fill="white"/></svg>;
}

export function PhoneIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none"><path d="M7.1 3.5 9.2 3c.48-.12.98.13 1.18.58l1.18 2.76c.18.43.06.92-.3 1.2L9.9 8.67a14.2 14.2 0 0 0 5.44 5.44l1.13-1.36c.3-.35.78-.47 1.2-.29l2.77 1.18c.45.2.7.7.58 1.18l-.5 2.1c-.15.64-.73 1.1-1.39 1.1A14.63 14.63 0 0 1 5.99 4.9c0-.66.46-1.24 1.1-1.4Z" fill="currentColor"/></svg>;
}

export function MailIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
