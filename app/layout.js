import { Inter, Lora, Montserrat } from 'next/font/google'
import '../styles/globals.css'
import Nav from './components/nav'
import Link from 'next/link'
import Footer from './components/footer'
import Image from 'next/image'
import { Player } from "@lottiefiles/react-lottie-player";


const inter = Inter({ subsets: ['latin'] })
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const name = "Tracey Chung";
export const siteTitle = "Tracey Chung Portfolio";

// export const metadata = {
//   title: 'Tracey Chung Portfolio',
//   description: 'Portfolio site for Tracey',
// }

export default function RootLayout({ children, home }) {
  return (
    // <div className={inter.className}>
    <div className={`bg-hero-pattern bg-cover bg-center min-h-screen ${inter.className} ${lora.className} ${montserrat.className}`}>
      <Nav />
      <div className="grid grid-cols-4">
        <div className="col-start-2 col-span-2">
          {/* <header className="header">
            {home ? (
              <>
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/1220a00d-fbc4-4a8a-bfe0-943cd1db3ca1/LrBYM5Y7U2.json"
                  style={{ height: "250px", width: "250px" }}></Player>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className=""
                  height={144}
                  width={144}
                  alt=""
                />
                <h1 className="text-3xl font-semibold mb-2">{name}</h1>
              </>
            ) : (
              <>
                <Link href="/">
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className=""
                    height={108}
                    width={108}
                    alt=""
                  />
                </Link>
                <h2 className="">
                  <Link href="/" className="">
                    {name}
                  </Link>
                </h2>
              </>
            )}
          </header> */}
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


// import { Inter } from "next/font/google";
// import "../styles/globals.css";
// import Nav from "./components/nav";
// import Link from "next/link";
// import Image from "next/image";

// const inter = Inter({ subsets: ["latin"] });

// const name = "Tracey Chung";

// export default function RootLayout({ children }) {
//   // No need for the "home" prop here
//   return (
//     <div className={inter.className}>
//       <div className="grid grid-cols-4">
//         <div className="col-start-2 col-span-2 mt-20">
//           <Nav />
//           <header>
//             <Image
//               priority
//               src="/images/profile.jpg"
//               className=""
//               height={144}
//               width={144}
//               alt=""
//             />
//             <h1>{name}</h1>
//           </header>
//           <main>{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// }
