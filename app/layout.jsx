import "../styles/global.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header color="" />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
