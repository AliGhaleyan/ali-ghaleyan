import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BasePageLayout } from "@/components/Layouts";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Ghaleyan",
  description:
    "I'm Ali Ghaleyan, a frontend developer with 3 years of experience in ReactJs and NextJs.I'm passionate about turning ideas into interactive and visually appealing experiences.In the ever-changing tech world, I thrive on learning and adapting, using each project to expand my skill set and explore innovative solutions.I'm always excited to delve into new technologies and best practices.",
  openGraph: {
    type: "website",
    siteName: "Ali Serjik",
  },
  twitter: {
    siteId: "@ghaleyan",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="BIeb3XLDKDUx52LXML7PbcTolBA1ubB2qPDahQbqxwo"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' data: blob:; connect-src 'self' vitals.vercel-insights.com; style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; font-src 'self' https://fonts.gstatic.com; script-src-elem 'self' 'unsafe-inline' https://va.vercel-scripts.com"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <BasePageLayout>{children}</BasePageLayout>
        <Analytics />
      </body>
    </html>
  );
}
