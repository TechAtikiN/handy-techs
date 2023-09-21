// type imports
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Handy Techs',
  description: 'Handy Techs is a initiative to provide handy and useful techs. Explore more in the branches',
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
