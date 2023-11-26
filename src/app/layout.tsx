import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BasePageLayout } from '@/components/Layouts';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ali Ghaleyan',
  description: 'Ali Ghaleyan - Frontend Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' data: blob:; connect-src 'self' vitals.vercel-insights.com; style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; font-src 'self' https://fonts.gstatic.com; script-src-elem 'self' 'unsafe-inline' https://va.vercel-scripts.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <BasePageLayout>
          {children}
        </BasePageLayout>
        <Analytics />
      </body>
    </html>
  )
}
