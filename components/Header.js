import { useTheme } from 'next-themes'
import Link from 'next/link'
import { BeakerIcon } from '@heroicons/react/solid'

export default function Header() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col sm:flex-row justify-between max-w-3xl mx-auto items-center">
        <div className="text-3xl sm:text-2xl font-semibold">
          <Link href="/">
            <a className="text-gray-900 hover:text-gray-700">
              {' '}
              <span className="text-indigo-700">Sam&apos;s</span> Portfolio
            </a>
          </Link>
        </div>
        <ul className="flex mt-4 sm:mt-0">
          <li className="ml-4">
            <Link href="/">
              <a className="text-gray-900 hover:text-gray-700">Home</a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/about">
              <a className="text-gray-900 hover:text-gray-700">About</a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/portfolio">
              <a className="text-gray-900 hover:text-gray-700">Portfolio</a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/blog">
              <a className="text-gray-900 hover:text-gray-700">Blog</a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/contact">
              <a className="text-gray-900 hover:text-gray-700">Contact</a>
            </Link>
          </li>
          <li className="ml-4">
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="  md:order-3"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              <BeakerIcon className="h-5 w-5 text-indigo-500" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
