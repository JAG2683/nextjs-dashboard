// Suppress TS error for side-effect CSS import when no type declarations are present
// @ts-ignore: Implicit any for CSS module
import './ui/global.css';
import { inter } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
  {children}
</body>
    </html>
  );
}
