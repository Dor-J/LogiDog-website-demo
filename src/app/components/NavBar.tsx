'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavBar() {
    const pathname = usePathname()

    return (
        <div>
            <nav className="flex items-center justify-center space-x-4">
                <ul className="flex space-x-6">
                    <li
                        className={clsx(
                            'border-4 border-transparent px-4 py-2 hover:text-blue-200 hover:underline' +
                                (pathname === '/'
                                    ? ' border-4 border-blue-800'
                                    : '')
                        )}
                    >
                        <Link href="/">Home</Link>
                    </li>
                    <li
                        className={clsx(
                            'border-4 border-transparent px-4 py-2 hover:text-blue-200 hover:underline' +
                                (pathname === '/dashboard'
                                    ? ' border-blue-800'
                                    : '')
                        )}
                    >
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li
                        className={clsx(
                            'border-4 border-transparent px-4 py-2 hover:text-blue-200 hover:underline' +
                                (pathname === '/contact'
                                    ? ' border-blue-800'
                                    : '')
                        )}
                    >
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
