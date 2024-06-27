import { Nunito_Sans } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const nunito = Nunito_Sans({ subsets: ['latin'], weight:['400', '500', '600', '700', '800', '900'], style:['normal'] }); 

export const metadata = {
  title: {
    default: 'Car Doctor',
    template: '%s | Car Doctor',
  },
  description: "Car Repairing Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDocotorTheme">
      <body className={nunito.className}>
      <AuthProvider>
        <ToastContainer/>
        <Navbar />
         {children}
        <Footer />
      </AuthProvider>
      </body>
    </html>
  );
}
