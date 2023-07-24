import { ThemeProvider } from '@/components/themeProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ThemeProvider enableSystem={true} attribute='class'defaultTheme='system'>
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
