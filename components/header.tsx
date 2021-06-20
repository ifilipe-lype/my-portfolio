import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import ThemeSwitcher from './theme-switcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="shadow-sm sticky top-0 bg-white z-50">
      <div className="container py-4 max-w-screen-lg">
        <nav className="flex md:flex-row flex-col md:items-center justify-between">
          <div className="flex justify-between items-center">
            <h1 className="font-extrabold overflow-hidden flex items-center">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/avatar.jpg"
                  alt="Filipe André's Picture"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
              <span className="ml-4 text-lg text-gray-700 lg:text-xl">
                Filipe André
              </span>
            </h1>

            <div className="flex items-center">
              <div className="flex items-center md:hidden">
                <ThemeSwitcher />
              </div>
              <button
                onClick={() => setIsMenuOpen((oldValue) => !oldValue)}
                className="ml-4 outline-none text-indigo-400 focus:ring-indigo-500 focus:text-indigo-500 focus:outline-none md:hidden flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } md:flex py-4 md:py-0 md:flex-row flex-col md:items-center justify-between`}
          >
            <div className="hidden items-center md:flex mr-4">
              <ThemeSwitcher />
            </div>

            <ul className="flex md:flex-row flex-col text-center items-center md:mr-4 lg:mr-8 text-gray-500 font-light">
              <li className="bg-gray-50 hover:text-gray-700 transition hover:bg-gray-100 md:bg-transparent md:hover:bg-transparent md:m-0 my-2 rounded w-full md:w-auto">
                <Link href="">
                  <a className="flex w-full px-4 py-1 focus:outline-none">
                    Services
                  </a>
                </Link>
              </li>
              <li className="bg-gray-50 hover:text-gray-700 transition hover:bg-gray-100 md:bg-transparent md:hover:bg-transparent md:m-0 my-2 rounded w-full md:w-auto">
                <Link href="">
                  <a className="flex w-full px-4 py-1 focus:outline-none">
                    Portfolio
                  </a>
                </Link>
              </li>
              <li className="bg-gray-50 hover:text-gray-700 transition hover:bg-gray-100 md:bg-transparent md:hover:bg-transparent md:m-0 my-2 rounded w-full md:w-auto">
                <Link href="">
                  <a className="flex w-full px-4 py-1 focus:outline-none">
                    About me
                  </a>
                </Link>
              </li>
            </ul>

            <button className="px-4 md:px-6 py-2 w-full md:w-auto mt-4 md:mt-0 bg-indigo-500 hover:bg-indigo-700 transition text-white shadow md:text-sm rounded-xl focus:outline-none">
              Hire me
            </button>

            <div className="mt-8 flex md:hidden items-center">
              <ul className="flex w-full lg:w-9/12 items-center justify-evenly">
                <li className="cursor-pointer flex items-center justify-center text-gray-400 hover:text-gray-700">
                  <Link href="#">
                    <span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="linkedin"
                        className="w-6 h-6"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="cursor-pointer flex items-center justify-center text-gray-400 hover:text-gray-700">
                  <Link href="#">
                    <span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="twitter"
                        className="w-6 h-6"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="cursor-pointer flex items-center justify-center text-gray-400 hover:text-gray-700">
                  <Link href="#">
                    <span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="github"
                        className="w-6 h-6"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path
                          fill="currentColor"
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="cursor-pointer flex items-center justify-center text-gray-400 hover:text-gray-700">
                  <Link href="#">
                    <span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="envelope"
                        className="w-6 h-6"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
