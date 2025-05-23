import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import ContextProvider from "@/Context/Context";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Shubhhampers",
  icons: {
    icon: "/shubhhampers-mini.png",
    shortcut: "/shubhhampers-mini.png",
    apple: "/shubhhampers-mini.png",
  },
  keywords: [
    "Shubhhampers",
    "Gifts",
    "Gifting",
    "Gift Hampers",
    "Gift Boxes",
    "Gift Delivery",
    "Personalized Gifts",
    "Custom Gifts",
    "Luxury Gifts",
    "Unique Gifts",
  ],
  authors: [
    {
      name: "Shubhhampers",
      url: "https://shubhhampers.com",
    },
  ],
  creator: "Shubhhampers",
  publisher: "Shubhhampers",
  description:
    "Shubhhampers is a gifting company that specializes in creating unique and personalized gift hampers and boxes for all occasions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        {process.env.NEXT_PUBLIC_ENV === "production" && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
        )}
        {process.env.NEXT_PUBLIC_ENV === "production" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
            `,
            }}
          />
        )}
      </head>
      <body className={`bg-gray-100 mt-[96px] ${inter.className}`}>
        <NextTopLoader color="#000" height={4} />
        <ContextProvider>
          <Header />
          <Toaster position="top-right" reverseOrder={false} />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
