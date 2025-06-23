'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavBar() {
    const pathname = usePathname()

    const routes = { '/': 'Home', '/dashboard': 'Dashboard' }

    return (
        <div>
            <nav className="flex items-center justify-center space-x-4">
                <ul className="flex space-x-6">
                    {Object.entries(routes).map(([path, label]) => (
                        <li
                            key={path}
                            className={clsx(
                                'border-4 border-transparent px-4 py-2 hover:text-blue-200 hover:underline',
                                pathname === path ? 'border-blue-800' : ''
                            )}
                        >
                            <Link href={path}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
