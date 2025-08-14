"use client"

import { ReactNode } from "react"

type LayoverModalProps = {
  open: boolean
  title: string
  children: ReactNode
  onRequestClose: () => void
  allowClose?: boolean
  zIndex?: number
}

export default function LayoverModal({ open, title, children, onRequestClose, allowClose = true, zIndex = 50 }: LayoverModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex }}>
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => {
          if (allowClose) onRequestClose()
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="layover-dialog-title"
        className="relative z-10 w-full max-w-2xl mx-4 bg-card text-card-foreground border rounded-xl shadow-2xl max-h-[85vh] overflow-auto"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-card/95 backdrop-blur px-6 py-4 rounded-t-xl">
          <h3 id="layover-dialog-title" className="text-lg font-semibold">
            {title}
          </h3>
          {allowClose && (
            <button
              type="button"
              aria-label="Close"
              onClick={onRequestClose}
              className="text-sm text-muted-foreground hover:text-foreground px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              ✕
            </button>
          )}
        </div>
        <div className="px-6 py-5 space-y-4">{children}</div>
      </div>
    </div>
  )
}


