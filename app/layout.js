import "@fontsource/libre-caslon-condensed/400.css";
import "@fontsource/libre-caslon-condensed/500.css";
import "@fontsource/libre-caslon-condensed/700.css";
import "./globals.css";
import Nav from "./components/Nav";
import {Footer} from "./components/Footer";

// const inter = Libre Caslon Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "Happy Birthday",
  description: "Happy Bithday Mrs. Charity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import {Nav} from "./components/Nav";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Happy Birthday",
//   description: "Happy birthday Mrs. Charity",
// };

// export default function RootLayout({ children }: LayoutProps<"/">) {
//   return (
//     <><html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
//       </Nav>
//     <body className="min-h-full flex flex-col"> 
//         {children}
//         </body> 
//        </html>
//   )
// }
