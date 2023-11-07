import { Inter,Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair_display',
 weight:'400',
})
 
export const metadata = {
  title: 'BelleBloom',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${inter.variable} ${playfair_display .variable}`}>{children}</body>
    </html>
  )
}
