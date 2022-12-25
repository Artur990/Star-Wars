import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import deved from "../public/dev-ed-wave.png";
import { useEffect, useState } from "react";
import { text } from "stream/consumers";
import Link from "next/link";
// const inter = Inter({ subsets: ["latin"] });
import localForage from "localforage";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState<any>();
  const foo = "hello world";
  useEffect(() => {
    localForage.setItem("myuniquekey", foo);
    localForage.getItem("myuniquekey").then((res) => setData(res));
  }, []);
  console.log(data);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Star Wars</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black  dark:bg-yellow-50">
        <div
          className="relative mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full w-80 h-80
            md:h-96 md:w-96
           overflow-hidden border-black
          "
        >
          <Image src={deved} alt="" layout="fill" objectFit="cover" />
        </div>
        <div>
          <p className="text-gray-400 text-md py-1 loading-8 md:text-xl max-w-xl mx-auto">
            Ten projekt tworzyłem w celu nakuki fremwork
            <span className="text-cyan-600"> Next.js</span> i biblioteki
            <span className="text-cyan-600"> React Query</span>
          </p>
        </div>
      </div>
    </div>
  );
}
{
  /* <main className="bg-black  dark:bg-yellow-50"> */
}
{
  /* <section className="lg:flex gap-10">
          <nav className="py-10 max-w-full mb-12 flex justify-between ">
            <h1 className="text-4xl font-extrabold text-cyan-600 ">
              Star Wars
            </h1>
            <ul className="flex items-center w-60 justify-around ">
              <li>
                <li
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-red-800"
                >
                  Dark
                </li>
              </li>
              <li>
                <Link
                  href="/films"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg md-8 "
                >
                  Films
                </Link>
              </li>
              <li>
                <Link
                  href="/characters"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg md-8 "
                >
                  Characters
                </Link>
              </li>
            </ul>
          </nav>
        </section> */
}
{
  /* <section className="bg-slate-500 w-full h-96 p-10">
        <h1 className="text-5xl">A New hope</h1>
        <p>
          It is a period of civil war. Rebel spaceships, striking from a hidden
          base, have won their first victory against the evil Galactic Empire.
          During the battle, Rebel spies managed to steal secret plans to the
          Empires ultimate weapon, the DEATH STAR, an armored space station with
          enough power to destroy an entire planet. Pursued by the Empires
          sinister agents, Princess Leia races home aboard her starship,
          custodian of the stolen plans that can save her people and restore
          freedom to the galaxy....
        </p>
        <h1 className="text-3xl">Charakters:</h1>
        <ul>
          <li>
            <a>Luke Sylwalker</a>
          </li>
          <li>
            <a>C-3PO</a>
          </li>
          <li>
            <a>RD-D2</a>
          </li>
        </ul>
        <input type="text" />
      </section> */
}
{
  /* </main> */
}