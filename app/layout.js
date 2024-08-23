import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LearnScape AI",
  description: "Generated AI flashcards",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider  > 
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider> 
  );
}
