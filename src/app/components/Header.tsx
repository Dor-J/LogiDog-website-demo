import React from 'react'
import NavBar from './NavBar'

export default function Header() {
    return (
        <header className="flex w-full items-center justify-between bg-emerald-600 pr-4 pl-4 text-white">
            <div className="p-4">
                <span className="text-xl font-bold">LogiDog</span>
            </div>
            <NavBar />
        </header>
    )
}
