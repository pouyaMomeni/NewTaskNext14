'use client';

import Link from 'next/link';
import { useState } from 'react';

interface navBarType {
  json: string[];
  jsonLink: string[];
}
export default function NavBar({ json, jsonLink }: navBarType) {
  const [close, setCloss] = useState(true);

  const openAndClose = () => {
    setCloss(!close);
  };

  console.log(json);

  return (
    <nav className="bg-darkest font-[family-name:var(--font-geist-mono)]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div></div>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div></div>
          <button
            onClick={openAndClose}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-darkest rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-darkest "
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
          className={`className="items-center justify-between ${close ? 'hidden' : ''} w-full md:flex md:w-auto md:order-1 `}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-600 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent">
            {json.map((value, key) => {
              return (
                <li>
                  <Link
                    href={jsonLink[key]}
                    className="block py-2 px-3 md:p-0 text-lighest hover:text-mid rounded md:bg-transparent font-semibold"
                    aria-current="page"
                    key={key}
                  >
                    {value}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
