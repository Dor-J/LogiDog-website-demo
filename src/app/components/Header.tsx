import React from 'react'
import NavBar from './NavBar'

export default function Header() {
    return (
        <header className="w-full bg-emerald-700 text-white shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="cursor-default text-2xl font-extrabold tracking-tight select-none">
                    LogiDog
                </div>

                {/* Nav */}
                <NavBar />
            </div>
        </header>
    )
}
