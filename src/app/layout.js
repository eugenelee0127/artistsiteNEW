// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Eugene Lee - Artist Portfolio',
  description: 'Official portfolio of Eugene Lee',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
