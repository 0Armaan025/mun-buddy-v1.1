import React from "react";
import "./navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav
        className=" mx-32 border my-4 rounded-2xl blur-[0.3px] "
        style={{ background: "RGB(255,255,255,0.1)" }}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <span
              className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              style={{ fontFamily: "Poppins" }}
            >
              M.U.N-Buddy
            </span>
          </Link>

          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={false}
            >
              <span className="sr-only">Open user menu</span>
              <Link href="/dashboard">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                  alt="user photo"
                />
              </Link>
            </button>

            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 mr-4">
              <li>
                <a
                  href="#"
                  className="block py-2  text-white "
                  style={{ fontFamily: "Poppins" }}
                >
                  About
                </a>
              </li>
              <li>
                <Link
                  href="/create-or-join"
                  className="block py-2 px-1 text-white "
                  style={{ fontFamily: "Poppins" }}
                >
                  Create/Join
                </Link>
              </li>
              <li>
                <Link
                  href="/researches"
                  className="block py-2 px-1 text-white "
                  style={{ fontFamily: "Poppins" }}
                >
                  Researches
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
