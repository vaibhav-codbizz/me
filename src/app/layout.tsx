import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MatrixBackground from '@/components/MatrixBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vaibhav | Backend Developer & System Architect',
  description: 'Elite backend developer specializing in Node.js, TypeScript, PostgreSQL. Building scalable systems and robust APIs.',
  keywords: 'backend developer, nodejs, typescript, postgresql, mongodb, express, api development',
  authors: [{ name: 'Vaibhav' }],
  openGraph: {
    title: 'Vaibhav - Backend Developer',
    description: 'Professional backend developer with expertise in modern web technologies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav - Backend Developer',
    description: 'Professional backend developer with expertise in modern web technologies',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <MatrixBackground />
        {children}
      </body>
    </html>
  )
}