import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col sm:flex-row justify-between max-w-3xl mx-auto items-center">
        <div className="text-3xl sm:text-2xl font-semibold">
          <Link href="/">
            <a className="text-gray-900 hover:text-gray-700 dark:text-white">
              {' '}
              <span className="text-indigo-700">Sam&apos;s</span> Portfolio
            </a>
          </Link>
        </div>
        <ul className="flex mt-4 sm:mt-0 ">
          <li className="ml-4">
            <Link href="/">
              <a className="text-gray-900 hover:text-gray-700  dark:text-white">
                Home
              </a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/about">
              <a className="text-gray-900 hover:text-gray-700 dark:text-white">
                About
              </a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/portfolio">
              <a className="text-gray-900 hover:text-gray-700 dark:text-white">
                Portfolio
              </a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/blog">
              <a className="text-gray-900 hover:text-gray-700 dark:text-white">
                Blog
              </a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/contact">
              <a className="text-gray-900 hover:text-gray-700 dark:text-white">
                Contact
              </a>
            </Link>
          </li>
          <li className="ml-4">
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="  md:order-3"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
