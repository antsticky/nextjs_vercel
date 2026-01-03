import '@/app/globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="pageWrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
