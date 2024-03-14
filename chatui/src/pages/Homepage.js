/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gU7lW3rPCF2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Link} from "react-router-dom"

export default function Component() { 
  return (
    <div className="flex flex-col h-screen w-full">
      <header className="sticky top-0 z-10 bg-white shadow">
        <div className="container flex items-center justify-between h-[60px] px-4 md:px-6">
          <Link className="flex items-center space-x-2 font-semibold" href="#">
            <span>ChatGPT</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              className="flex items-center text-sm font-medium text-gray-900 transition-colors hover:text-gray-900/90 dark:hover:text-gray-50/90"
              href="#"
            >
              Home
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-gray-900 transition-colors hover:text-gray-900/90 dark:hover:text-gray-50/90"
              href="#"
            >
              Features
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-gray-900 transition-colors hover:text-gray-900/90 dark:hover:text-gray-50/90"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-gray-900 transition-colors hover:text-gray-900/90 dark:hover:text-gray-50/90"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              className="flex items-center text-sm font-medium text-gray-900 transition-colors hover:text-gray-900/90 dark:hover:text-gray-50/90"
              href="#"
            >
              Sign in
            </Link>
            <Link
              className="inline-block w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 border-gray-200 overflow-hidden shadow-sm dark:border-gray-800"
              href="#"
            >
              <img
                alt="Avatar"
                className="rounded-full"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <span className="sr-only">Avatar</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-gray-100/90 dark:bg-gray-800/90">
        <div className="container flex flex-col items-center justify-center py-8 px-4 md:px-6 space-y-4">
          <div className="max-w-[800px] text-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">ChatGPT Clone</h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Enter your message below and receive AI-generated responses.
            </p>
          </div>
          <div className="w-full max-w-[800px] space-y-2">
            <input
              className="w-full border-gray-200 border-gray-200 dark:border-gray-800"
              placeholder="Type a message..."
              type="text"
            />
            <button className="w-full">Generate</button>
          </div>
          <div className="w-full max-w-[800px] space-y-2">
            <div className="rounded-md border border-gray-200 border-gray-200 bg-white p-4 shadow-sm md:p-6 dark:border-gray-800 dark:bg-gray-950">
              {`
                        <Responses will appear here>
                      `}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

