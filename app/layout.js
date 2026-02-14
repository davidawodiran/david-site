import './globals.css';

export const metadata = {
  title: 'David Awodiran - Software Engineer & Co-founder of Velzo',
  description:
    'Software engineer building Velzo, an Africa-first marketplace to sell and discover digital products.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
