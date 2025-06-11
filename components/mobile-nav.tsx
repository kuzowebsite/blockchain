"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Home, BarChart2, Wallet, Database, Cloud, Shield, LogIn, TrendingUp, Award, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Нүүр",
      icon: Home,
    },
    {
      href: "/dashboard",
      label: "Хяналтын самбар",
      icon: BarChart2,
    },
    {
      href: "/trading",
      label: "Арилжаа",
      icon: TrendingUp,
    },
    {
      href: "/wallet",
      label: "Хэтэвч",
      icon: Wallet,
    },
    {
      href: "/mining",
      label: "Олборлолт",
      icon: Database,
    },
    {
      href: "/defi",
      label: "DeFi",
      icon: Layers,
    },
    {
      href: "/nft",
      label: "NFT",
      icon: Award,
    },
    {
      href: "/storage",
      label: "Хадгалалт",
      icon: Cloud,
    },
    {
      href: "/auth",
      label: "Нэвтрэх",
      icon: LogIn,
    },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Цэс нээх</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-bold">QuantumChain</span>
            </div>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="space-y-1 px-2">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                    pathname === route.href ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  <route.icon className="h-5 w-5" />
                  {route.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="border-t p-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Системийн статус: Хэвийн</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
