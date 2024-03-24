/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mQlA3oZopV3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <>
      <div className="bg-gray-50/90 py-6 md:py-12">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects by Kelly</h1>
            <p className="inline-block text-base font-medium tracking-wide sm:text-lg text-gray-500 dark:text-gray-400">
              Software Engineer
            </p>
          </div>
        </div>
      </div>
      <div className="py-6 md:py-12">
        <div className="container grid items-start gap-4 px-4 md:px-6">
          <div className="grid max-w-3xl items-start gap-4 mx-auto text-center lg:grid-cols-3 lg:max-w-none lg:gap-10 lg:text-left">
            <div className="space-y-2 lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hi, I'm Kelly</h2>
              <p className="text-gray-500 dark:text-gray-400">
                I'm a software engineer who loves building web applications. Welcome to my portfolio.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start space-y-2">
              <Link
                className="inline-flex items-center text-base font-medium underline transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                View on GitHub
              </Link>
            </div>
          </div>
          <div className="grid max-w-4xl items-start gap-6 mx-auto lg:gap-8">
            <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-8">
              <div className="relative group">
                <Link className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10" href="#">
                  <span className="sr-only">View</span>
                  <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-gray-900 opacity-0 translate-y-10 group-hover:opacity-90 transition-opacity text-gray-50 hover:translate-y-0 dark:bg-gray-50 dark:hover:translate-y-0 dark:text-gray-900">
                    <ChevronRightIcon className="w-5 h-5" />
                  </span>
                </Link>
                <img
                  alt="Project 1"
                  className="rounded-lg object-cover aspect-[2/1] group-hover:opacity-70 transition-opacity"
                  height="200"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="grid gap-1.5 mt-2">
                  <h3 className="text-lg font-semibold tracking-tighter">Project One</h3>
                  <p className="text-sm tracking-tight">
                    Description for project one. This project does something cool.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10" href="#">
                  <span className="sr-only">View</span>
                  <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-gray-900 opacity-0 translate-y-10 group-hover:opacity-90 transition-opacity text-gray-50 hover:translate-y-0 dark:bg-gray-50 dark:hover:translate-y-0 dark:text-gray-900">
                    <ChevronRightIcon className="w-5 h-5" />
                  </span>
                </Link>
                <img
                  alt="Project 2"
                  className="rounded-lg object-cover aspect-[2/1] group-hover:opacity-70 transition-opacity"
                  height="200"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="grid gap-1.5 mt-2">
                  <h3 className="text-lg font-semibold tracking-tighter">Project Two</h3>
                  <p className="text-sm tracking-tight">
                    Description for project two. This project does something even cooler.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
