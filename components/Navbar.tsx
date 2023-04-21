import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import useColorMode from '../hook/useColorMode'

const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode()
  const [menu, setMenu] = useState(false)
  return (
    <div className="bg-slate-200 dark:bg-slate-800">
      <nav className="bg-slate-200 dark:bg-slate-800">
        <section
          className="sticky top-0 z-10 mx-auto flex max-w-4xl 
          items-center justify-between p-2 "
        >
          <Link
            href="/"
            className="font-poppins text-2xl  font-medium text-cyan-600 "
          >
            Star Wars
          </Link>
          <div>
            <div>
              <button
                onClick={() => setMenu(!menu)}
                className="font-poppins text-2xl focus:outline-none sm:hidden "
              >
                <AiOutlineMenu />
              </button>
            </div>
            <div className="sm:hidden">
              {menu ? (
                <div className=" fixed top-0 right-0 ">
                  <ul className="w-60  rounded-bl-2xl   bg-slate-800 dark:bg-slate-400 ">
                    <li
                      className="p-1  text-center font-poppins  text-3xl text-white hover:bg-black  hover:opacity-90 dark:text-black dark:hover:bg-white
                    "
                    >
                      <button
                        onClick={() =>
                          setColorMode(colorMode === 'light' ? 'dark' : 'light')
                        }
                        className="font-poppins  text-red-800"
                      >
                        {colorMode === 'light' ? (
                          <div>Dark</div>
                        ) : (
                          <div>Light</div>
                        )}
                      </button>
                    </li>
                    <li className=" text-3xltext-white  p-1 text-center font-poppins text-3xl text-white hover:bg-black hover:opacity-90 dark:text-black dark:hover:bg-white">
                      {' '}
                      <Link href="/films" onClick={() => setMenu(!menu)}>
                        Films
                      </Link>
                    </li>
                    <li className=" dark:hover:bg-slate-black p-1 text-center font-poppins text-3xl text-white hover:bg-black hover:opacity-90 dark:text-black dark:hover:bg-white">
                      {' '}
                      <Link href="/characters" onClick={() => setMenu(!menu)}>
                        Characters
                      </Link>
                    </li>
                    <li
                      className=" cursor-pointer rounded-bl-2xl p-1 text-center font-poppins text-3xl text-white  hover:bg-black hover:opacity-90 dark:text-black dark:hover:bg-white"
                      onClick={() => setMenu(!menu)}
                    >
                      Zamknij
                    </li>
                  </ul>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>

          <ul className="hidden w-60 items-center justify-around sm:flex ">
            <li className="hidden sm:block">
              <button
                onClick={() =>
                  setColorMode(colorMode === 'light' ? 'dark' : 'light')
                }
                className="text-red-800"
              >
                {colorMode === 'light' ? <div>Dark</div> : <div>Light</div>}
              </button>
            </li>
            <li>
              <Link
                href="/films"
                className="rounded-lg bg-gradient-to-r from-cyan-500  to-teal-500 px-3 py-1 text-black dark:text-white "
              >
                Films
              </Link>
            </li>
            <li>
              <Link
                href="/characters"
                className=" rounded-lg bg-gradient-to-r from-cyan-500  to-teal-500 px-3 py-1 text-black dark:text-white "
              >
                Characters
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  )
}

export default Navbar
