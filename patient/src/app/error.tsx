"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, TriangleAlert } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="relative mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 md:px-10" role="alert" aria-live="assertive">
      {/* Background accents (light + dark) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 " />
        <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-400/10" />
        <div className="absolute bottom-[-10%] left-[-10%] h-72 w-72 rounded-full bg-neutral-200/50 blur-3xl dark:bg-neutral-800/40" />
      </div>

      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs font-medium text-amber-800 shadow-sm backdrop-blur dark:border-amber-300/30 dark:bg-white/5 dark:text-amber-200">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        Findr
      </div>

      <section className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
          <TriangleAlert className="h-8 w-8" aria-hidden="true" />
        </div>

        <h1 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
          <span className="bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text text-transparent dark:from-white dark:to-neutral-300">
            Something went wrong
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-600 dark:text-neutral-400">
          An unexpected error occurred. You can try again or return to the home page.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button onClick={() => reset()} className="rounded-lg bg-amber-600 text-white hover:bg-amber-700">
            Try again
          </Button>
          <Button asChild variant="outline" className="rounded-lg bg-transparent">
            <Link href="/">Go home</Link>
          </Button>
        </div>

        {/* Optional technical details for debugging (hidden from SR by default) */}
        {process.env.NODE_ENV !== "production" && error?.message && (
          <pre className="mx-auto mt-8 max-w-2xl overflow-auto rounded-lg border border-neutral-200/70 bg-white/70 p-4 text-left text-xs text-neutral-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
            {error.message}
            {error?.digest ? `\nDigest: ${error.digest}` : ""}
          </pre>
        )}
      </section>
    </main>
  )
}
