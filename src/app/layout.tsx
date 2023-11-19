import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BasePageLayout } from '@/components/Layouts'

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
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; vercel vitals.vercel-insights.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,400i,700&display=swap" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <BasePageLayout>
          {children}
        </BasePageLayout>
      </body>
    </html>
  )
}
