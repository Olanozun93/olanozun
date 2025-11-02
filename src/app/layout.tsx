import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import { Header } from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import './globals.css'
import { Analytics} from '@vercel/analytics/react'
import {SpeedInsights} from '@vercel/speed-insights/next'
import GoogleAnalytics from '@/components/GoogleAnalytics'


const hankenGrotesk = Hanken_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken-grotesk',
})

export const metadata: Metadata = {
  title: {
    default: 'Olanozun Maria Raiwe - Product Leader & Co-Founder',
    template: '%s | Olanozun Maria Raiwe'
  },
  description: 'Transforming complex data into intuitive, high-growth consumer products. Product Leader specializing in strategic leadership, product growth, and platform scaling.',
  keywords: ['product management', 'platform scaling', 'AI ethics', 'developer experience', 'product growth', 'Olanozun Maria Raiwe'],
  authors: [{ name: 'Olanozun Maria Raiwe' }],
  creator: 'Olanozun Maria Raiwe',
  publisher: 'Olanozun Maria Raiwe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://olanozun.com'),
  alternates: {
    canonical: '/',
  },
  icons:{
    icon:[
      {url:'/Ola.ico'},
      {url: '/O.png', sizes:'16x16', type: 'image/png'},
      {url: '/O-32.png', sizes:'32x32', type: 'image/png'},
    ],
    apple:[
      {url: '/apple-touch-icon.png'},
    ],
    other:[
      {
        rel:'icon',
        url:'/android-chrome-192.png',
        sizes:'192x192', type:'image/png',
      },
      {
        rel:'icon', url:'/android-chrome-512.png', sizes:'512x512', type:'image/png',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://olanozun.com',
    title: 'Olanozun Maria Raiwe - Product Leader & Co-Founder',
    description: 'Transforming complex data into intuitive, high-growth consumer products.',
    siteName: 'Olanozun Maria Raiwe',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Olanozun Maria Raiwe - Product Leader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olanozun Maria Raiwe - Product Leader & Co-Founder',
    description: 'Transforming complex data into intuitive, high-growth consumer products.',
    creator: '@olaraiwe',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={hankenGrotesk.variable}>
      <body className="font-sans antialiased min-h-screen bg-white text-black">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
            <SpeedInsights/>
            < Analytics/>
            <GoogleAnalytics/>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}