import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Clinicode Labs',
  description: 'Clinical coding and healthcare technology',
  openGraph: {
    title: 'Clinicode Labs',
    description: 'Clinical coding and healthcare technology',
    images: [
      {
        url: '/assets/logo_previewcard.svg',
        width: 1200,
        height: 630,
        alt: 'Clinicode Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinicode Labs',
    description: 'Clinical coding and healthcare technology',
    images: ['/assets/logo_previewcard.svg'],
  },
  icons: {
    icon: [
      { url: '/assets/logo_appicon_square.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/assets/logo_appicon_square.svg',
    apple: '/assets/logo_appicon_square.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
