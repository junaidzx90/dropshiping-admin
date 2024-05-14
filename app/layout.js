import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { DataProvider } from "@/contexts/dataStorage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spo admin panel",
  description: "CMS of the spo.com",
};


export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          <main className="h-screen">
              <div className="flex flex-row">
                {<Sidebar/>}
                <div className="w-full flex-1">
                  <Header/>
                  <div className="p-5">
                      {children}
                  </div>
                </div>
              </div>
          </main>
        </DataProvider>
      </body>
    </html>
  );
}