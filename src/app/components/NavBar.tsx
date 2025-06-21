import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (
        <div>
            <nav className="flex items-center justify-center space-x-4">
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
