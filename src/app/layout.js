import './globals.css'

export const metadata = {
  title: 'YiKe Teck',
  description: 'Design italiano, tecnologia e innovazione',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}