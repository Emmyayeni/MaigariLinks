import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Maigari Links Oil & Gas Ltd - Energy Solutions Nigeria",
  description:
    "Reliable oil & gas services, engineering solutions, and industrial support powering businesses across Nigeria and Africa.",
  generator: "v0.app",
  metadataBase: new URL('https://maigarilinks.com'),
  openGraph: {
    title: 'Maigari Links Oil & Gas Ltd',
    description: 'Reliable oil & gas services, engineering solutions, and industrial support powering businesses across Nigeria and Africa.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-light.png" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/logo-light.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-light.png" type="image/png" />
        <link
          rel="preload"
          href="/logo-dark.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var html = document.documentElement;
                  html.classList.remove('dark', 'light');
                  if (theme === 'dark') {
                    html.classList.add('dark');
                  } else {
                    html.classList.add('light');
                  }
                } catch (e) {
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
