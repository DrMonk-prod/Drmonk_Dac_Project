import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  message?: string;
  tip?: string;
  fullScreen?: boolean;
  className?: string;
};

export default function FullScreenLoader({
  title = "Findr",
  message = "Loading…",
  tip = "Preparing your experience",
  fullScreen = true,
  className,
}: Props) {
  return (
    <main
      className={cn(
        "relative w-full h-full max-h-screen overflow-clip px-4 py-16 sm:px-6 md:px-10",
        fullScreen && "min-h-[70vh] sm:min-h-[80vh] md:min-h-[85vh]",
        className
      )}
      role="status"
      aria-busy="true"
      aria-live="polite"
    >
      {/* Background accents (light + dark) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0" />
        <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-400/10" />
        <div className="absolute bottom-[-10%] left-[-10%] h-72 w-72 rounded-full bg-neutral-200/50 blur-3xl dark:bg-neutral-800/40" />
      </div>

      {/* Centerpiece */}
      <section className="flex flex-col items-center justify-center text-center">
        {/* Spinner with glow */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-2xl dark:bg-amber-400/20" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/70 shadow-sm backdrop-blur dark:bg-white/5 dark:ring-1 dark:ring-white/10">
            <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-neutral-300/60 border-t-amber-500 dark:border-neutral-700 dark:border-t-amber-400" />
          </div>
        </div>

        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs font-medium text-amber-800 shadow-sm backdrop-blur dark:border-amber-300/30 dark:bg-white/5 dark:text-amber-200">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          {title}
        </div>

        {/* Headline */}
        <h1 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
          <span className="bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text text-transparent dark:from-white dark:to-neutral-300">
            {message}
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-3 max-w-xl text-sm text-neutral-600 dark:text-neutral-400">
          {tip}
        </p>

        {/* Subtle progress bar */}
        <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-neutral-200/80 dark:bg-neutral-800">
          <div className="h-full w-1/3 animate-[load_1.4s_ease_infinite] rounded-full bg-amber-500 dark:bg-amber-400" />
        </div>
      </section>

      {/* Keyframes */}
      <style>{`
        @keyframes load {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(20%); }
          100% { transform: translateX(120%); }
        }
      `}</style>

      <p className="sr-only">Content is loading</p>
    </main>
  );
}
