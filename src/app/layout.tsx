import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { CssBaseline } from "@mui/material";
import "./globals.css";

import theme from "../app/theme/theme";
import Header from "./components/Header";
import Footer from "./components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Cronos - The Internet of Blockchains",
  description:
    "Cronos is an ever expanding ecosystem of connected apps and services, built for a decentralized future.",
};
const createEmotionCache = () => {
  return createCache({
    key: "mui",
    prepend: true,
  });
};

const emotionCache = createEmotionCache();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="min-h-screen bg-[#050505]">
              <Header />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
