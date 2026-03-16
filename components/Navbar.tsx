"use client"

import Link from "next/link"

export default function Navbar() {
  return (

    <nav className="w-full bg-black text-white p-6 flex justify-between items-center">

      <Link href="/" className="font-bold text-xl">
        Layout Examples
      </Link>

      <div className="flex gap-6">

        <Link href="/saas" className="hover:text-blue-400">
          SaaS
        </Link>

        <Link href="/agency" className="hover:text-blue-400">
          Agência
        </Link>

        <Link href="/startup" className="hover:text-blue-400">
          Startup
        </Link>

      </div>

    </nav>
  )
}