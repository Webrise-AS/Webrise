import "../styles/global.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  let headerType = "light";

  return (
    <html lang="en">
      {headerType === "dark" ? (
        <body>
          <Providers>
            <Header color="dark" />
            {children}
            <Footer />
          </Providers>
        </body>
      ) : (
        <body>
          <Providers>
            <Header color="light" />
            {children}
            <Footer />
          </Providers>
        </body>
      )}
    </html>
  );
}
