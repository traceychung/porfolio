import { Inter, Lora, Montserrat } from 'next/font/google'
import '../styles/globals.css'
import Nav from './components/nav'
import Link from 'next/link'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const siteTitle = "Tracey Chung Portfolio";

export default function RootLayout({ children, home }) {
  return (
    <div
      className={`bg-hero-pattern bg-cover bg-center min-h-screen ${inter.className} ${montserrat.className}`}>
      <Nav />
      <div className="lg:grid lg:grid-cols-4 mx-4">
      {/* <div className='container'> */}
        <div className="lg:col-start-2 lg:col-span-2">
          <main>{children}</main>
          {!home && (
            <div className="mb-5">
              <Link href="/">← Back to home</Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
