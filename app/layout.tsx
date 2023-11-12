import './globals.css'
// type imports
import type { Metadata } from 'next'

// default imports
import ProgressProvider from '@/components/providers/ProgressProvider'

export const metadata: Metadata = {
  title: 'Handy Techs',
  description: 'Handy Techs is a initiative to provide handy and useful techs. Explore more in the branches',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <ProgressProvider>
          {children}
        </ProgressProvider>
      </body>
    </html>
  )
}
