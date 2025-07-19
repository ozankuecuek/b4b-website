"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

/**
 * A minimal language selector dropdown meant as a shell for future i18n handling.
 * Sticky positioning should be applied by the parent (e.g. fixed top-right in layout).
 */
export default function LanguageSelector() {
  const [lang, setLang] = useState<"EN" | "DE">("EN")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Tailwind classes for padding & rounded corners; inline style for brand colors */}
        <button
          className="inline-flex items-center justify-center gap-2.5 rounded-full px-5 py-2.5 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          style={{
            backgroundColor: "hsl(225 84% 24%)", // royal blue
            color: "hsl(198 89% 82%)", // non-photo blue
            fontFamily: "var(--font-primary)", // Lexend as per design system
          }}
        >
          <Globe className="size-5" />
          {lang}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => setLang("EN")}>EN</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLang("DE")}>DE</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 