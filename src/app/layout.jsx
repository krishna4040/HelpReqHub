import "@/app/globals.css";
import AuthContext from "@/components/Auth/Authcontext";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import Script from "next/script";

export const metadata = {
  title: "Recyclez",
  description: "An end-to-end goods redistributing platform",
};

const RootLayout = async ({ children }) => {
  const session = await getServerSession();

  return (
    <>
      <html lang="en">
        <head>
          <Script
            async
            strategy="beforeInteractive"
            src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GOOGLE_MAP_API_KEY}`}
          />
        </head>
        <body className="h-screen flex flex-col w-full">
          <AuthContext session={session}>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </AuthContext>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
