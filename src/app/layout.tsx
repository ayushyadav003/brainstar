"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import store from "../redux/store";
import styles from "./layout.module.scss";
import "./globals.css";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";
import AuthPopup from "@/components/auth";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()?.split("/");

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {pathname[2] ? (
            <div className={styles.dashboardLayout}>
              <div></div>
              <div className={styles.dashboard}>
                <Sidebar />
                <div className={styles.dashboardBody}>{children}</div>
              </div>
            </div>
          ) : (
            <div>
              <Header />
              {children}
              <Footer />
            </div>
          )}
          <AuthPopup />
        </Provider>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
