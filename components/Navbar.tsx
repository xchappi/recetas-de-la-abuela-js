import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">
          Recetario de la Abuela
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Button variant="ghost">Inicio</Button>
          </Link>
          <Link href="/recipe/new">
            <Button>Nueva Receta</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}