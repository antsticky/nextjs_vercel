// app/layout.tsx
import '@/app/globals.css'
import Header from '@/components/layout/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="pageWrapper"> <Header /> <main>{children}</main> </div>
      </body>
    </html>
  )
}
