import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AlexTolk',
  description: 'AlexTolk Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}