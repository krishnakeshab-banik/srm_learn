import Link from "next/link"
import { Home } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar-background border-r flex flex-col">
      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link
          href="/edit-content"
          className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          ✏️ Edit Content
        </Link>
      </nav>
    </aside>
  )
}

