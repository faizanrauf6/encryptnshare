import "./globals.css";
import { Inter } from "@next/font/google";
import { Header } from "./header";

import { Analytics } from "@components/analytics";
import { ThemeProvider } from "./theme-provider";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="relative min-h-screen bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30">
        {process.env.ENABLE_VERCEL_ANALYTICS ? <Analytics /> : null}
        <ThemeProvider>
          <Header />
          <main className="min-h-[80vh]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
