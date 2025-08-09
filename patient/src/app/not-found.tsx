import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, SearchX } from "lucide-react"

export default function NotFound() {
  return (
    <main className="relative mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 md:px-10">
      {/* Background accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/70 via-white to-white dark:from-black dark:via-neutral-950 dark:to-neutral-900" />
        <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-400/10" />
        <div className="absolute bottom-[-10%] left-[-10%] h-72 w-72 rounded-full bg-neutral-200/50 blur-3xl dark:bg-neutral-800/40" />
      </div>

      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs font-medium text-amber-800 shadow-sm backdrop-blur dark:border-amber-300/30 dark:bg-white/5 dark:text-amber-200">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        Findr
      </div>

      <section className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
          <SearchX className="h-8 w-8" aria-hidden="true" />
        </div>

        <h1 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
          <span className="bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text text-transparent dark:from-white dark:to-neutral-300">
            Page not found
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-600 dark:text-neutral-400">
          The page you’re looking for doesn’t exist or has moved.
        </p>

        <div className="mt-8 flex justify-center">
          <Button asChild className="rounded-lg bg-amber-600 text-white hover:bg-amber-700">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
