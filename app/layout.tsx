import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Conner's Portfolio - UI/UX Designer and Developer",
  description: "Welcome my personal portfolio. Discover my projects, skills, and experience in UI/UX design and web development.",
  keywords: "Conner, portfolio, UI/UX design, web development, front-end development, user experience, user interface, projects, skills",
  robots: "index, follow",
  openGraph: {
    title: "Conner's Portfolio - UI/UX Designer and Developer",
    description: "Welcome my personal portfolio. Discover my projects, skills, and experience in UI/UX design and web development.",
    url: "https://https://conner-portfolio.co.za/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
