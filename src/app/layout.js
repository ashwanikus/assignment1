import { Inter } from "next/font/google";
import Head from 'next/head';
import Link from 'next/link';
import navigation from '../components/navigation'; // Assuming you have a Navigation component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <nav>
        <ul className="navigation__list-wrapper">
          {navigation.map((navItem) => (
            <li key={navItem.path}>
              <Link href={navItem.path}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className={inter.className}>{children}</main>
    </>
  );
}
