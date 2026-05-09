export function StoreIcon({ type }) {
  if (type === "play") return <GooglePlayIcon />;
  if (type === "driver") return <DriverIcon />;
  return <AppleIcon />;
}

function AppleIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.38 12.04c-.03-2.26 1.84-3.36 1.93-3.41-1.06-1.55-2.69-1.76-3.25-1.78-1.37-.14-2.7.82-3.39.82-.71 0-1.78-.8-2.93-.78-1.49.02-2.88.89-3.65 2.25-1.58 2.74-.4 6.76 1.11 8.97.76 1.09 1.64 2.31 2.78 2.27 1.12-.05 1.54-.73 2.9-.73 1.34 0 1.74.73 2.93.7 1.2-.02 1.96-1.1 2.69-2.2.88-1.26 1.23-2.5 1.24-2.56-.03-.01-2.33-.9-2.36-3.55Z" />
      <path d="M14.17 5.39c.61-.76 1.03-1.79.91-2.84-.88.04-1.98.61-2.62 1.34-.57.65-1.08 1.72-.94 2.72.99.08 2-.49 2.65-1.22Z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#34a853" d="M4.5 3.2c-.31.34-.5.86-.5 1.54v14.52c0 .68.19 1.2.5 1.54l.08.08 8.13-8.13v-.5L4.58 3.12l-.08.08Z" />
      <path fill="#fbbc04" d="m15.42 15.47-2.71-2.72v-.5l2.72-2.72.06.04 3.21 1.82c.92.52.92 1.38 0 1.91l-3.21 1.82-.07.35Z" />
      <path fill="#4285f4" d="m15.49 15.12-2.78-2.87-8.21 8.2c.49.52 1.28.58 2.18.07l8.81-5.4Z" />
      <path fill="#ea4335" d="m15.49 9.88-8.81-5.4c-.9-.51-1.69-.45-2.18.07l8.21 8.2 2.78-2.87Z" />
    </svg>
  );
}

function DriverIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2-4H8l-2 4-2.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M6 10h12" />
    </svg>
  );
}
