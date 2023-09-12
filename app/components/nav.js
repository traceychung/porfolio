import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import tlogo from "../../public/images/tlogo.png"

export default function Nav() {
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full  top-0 left-0 bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image src={tlogo} className="h-8 w-11" alt="t-logo" />
          <span
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:block w-full md:w-auto md:order-1 self-center text-2xl font-semibold whitespace-nowrap md:hover:text-pink-400`}>
            TRACEY CHUNG
          </span>
        </Link>
        <div className="flex-grow"></div>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block w-full md:w-auto md:order-1`}
          id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                  router.pathname === "/"
                    ? "text-white bg-indigo-500 md:bg-transparent md:text-blue-700"
                    : "text-pink-400 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600"
                }`}
                aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                  router.pathname === "/experience"
                    ? "text-white bg-indigo-500 md:bg-transparent md:text-blue-700"
                    : "text-pink-400 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600"
                }`}>
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                  router.pathname.includes("/projects")
                    ? "text-white bg-indigo-500 md:bg-transparent md:text-blue-700"
                    : "text-pink-400 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600"
                }`}>
                Projects
              </Link>
            </li>
            <li>
              <a
                href="/files/TraceyChung_2023Resume.pdf"
                target="_blank"
                className="block py-2 pl-3 pr-4 rounded md:p-0 text-pink-400 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
