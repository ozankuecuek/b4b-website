"use client"

import { useMemo } from "react"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from "next/navigation"

/**
 * A minimal language selector dropdown meant as a shell for future i18n handling.
 * Sticky positioning should be applied by the parent (e.g. fixed top-right in layout).
 */
export default function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLang = useMemo<"EN" | "DE">(() => {
    const segment = pathname?.split("/")[1]?.toLowerCase()
    return segment === "de-de" ? "DE" : "EN"
  }, [pathname])

  function switchLang(target: "EN" | "DE") {
    const localeSegment = target === "DE" ? "de-de" : "en-en"
    const segments = (pathname || "/").split("/")
    // Ensure first segment is the locale
    if (segments.length > 1 && (segments[1] === "en-en" || segments[1] === "de-de")) {
      segments[1] = localeSegment
    } else {
      // If no locale segment (e.g., "/"), prepend it
      segments.splice(1, 0, localeSegment)
    }
    const nextPath = segments.join("/") || `/${localeSegment}`
    router.push(nextPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Tailwind classes for padding & rounded corners; inline style for brand colors */}
        <button
          className="inline-flex items-center justify-center gap-2.5 rounded-full px-5 py-2.5 text-base font-medium focus:outline-none cursor-pointer"
          style={{
            backgroundColor: "hsl(225 84% 24%)", // royal blue
            color: "hsl(198 89% 82%)", // non-photo blue
            fontFamily: "var(--font-primary)", // Lexend as per design system
          }}
        >
          <Globe className="size-5" />
          {currentLang}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => switchLang("EN")}>EN</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => switchLang("DE")}>DE</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 