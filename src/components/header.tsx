import { menuItems } from "@/data/menuItems"
import Logo from "./logo"
import Links from "./links"
import Cta from "./cta"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <Logo />
      <Links withBackground />
      <Cta text='Começar minha jornada' />
    </header>
  )
}