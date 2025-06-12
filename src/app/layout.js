import { Geist, Geist_Mono ,Anton,Poppins,Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins',
});
const anton = Anton({
  subsets: ['latin'],
  weight: '400', // Anton only has 400
});
export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weights: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
});
export const metadata = {
  title: "Beeyoond Gaming - A Sportstech World",
  description: "Explore the Beeyoond Gaming universe — where sports meets technology. Experience cutting-edge cardio games and immersive fitness adventures.",
  keywords:['Beeyoond Gaming, Sportstech, fitness technology, treadmill games, interactive workout, gaming fitness, blockchain, crypto'],
  authors: [{ name: "Beeyoond Gaming - A Sportstech World" }],

  icons: {
    icon: '/assets/images/favicon.svg',
  },
  openGraph: {
    title: "Beeyoond Gaming - A Sportstech World",
    description: "Explore our next-gen gaming platform built for fitness lovers. Train hard. Game harder.",
    url: "https://www.beeyoondgaming.com/",
    type: "website",
    images: [
      {
        url: "https://www.beeyoondgaming.com/public/assets/images/link-bg.png",
        width: 1200,
        height: 630,
        alt: "Beeyoond Gaming Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beeyoond Gaming - A Sportstech World",
    description: "Fitness meets Gaming. Discover the Beeyoond experience now.",
    images: ["https://www.beeyoondgaming.com/public/assets/images/link-bg.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        {/* JSON-LD Structured Data for SEO */}
      {/* <Head>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Beeyoond Gaming",
              "url": "https://www.beeyoondgaming.com",
              "logo": "https://www.beeyoondgaming.com/logo.png",
              "sameAs": [
                "https://www.instagram.com/beeyoondgaming",
                "https://www.youtube.com/@beeyoondgaming",
                "https://twitter.com/beeyoondgaming"
              ],
              "description": "Beeyoond Gaming is a Sportstech-powered platform combining blockchain, crypto, and fitness gaming for the future of interactive workouts."
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Beeyoond Gaming",
              "url": "https://www.beeyoondgaming.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.beeyoondgaming.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head> */}
      <body className={`${geistSans.variable} ${geistMono.variable}   ${poppins.variable}  ${anton.variable}  ${plusJakarta.variable}`}>
        {children}
      </body>
    </html>
  );
}
