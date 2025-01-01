"use client";
import "../styles/global.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "./providers";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  let headerType = "light";
  const pathname = usePathname();

  // Check if the current route is the projects page
  const isProjectsPage =
    pathname === "/projects" || pathname === "/projects/end";

  // Adjust headerType based on the route
  if (isProjectsPage) {
    headerType = "dark";
  }

  return (
    <html lang="en">
      <body>
        <Providers>
          <Header color={headerType} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
