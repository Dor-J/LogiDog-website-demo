'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavBar() {
    const pathname = usePathname()

    const routes = { '/': 'Home', '/dashboard': 'Dashboard' }

    return (
        <div>
            <nav aria-label="Primary navigation">
                <ul className="flex items-center space-x-6">
                    {Object.entries(routes).map(([path, label]) => (
                        <li key={path}>
                            <Link
                                href={path}
                                className={clsx(
                                    'relative inline-block px-3 py-2 transition-colors duration-300',
                                    pathname === path
                                        ? 'text-white before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-full before:bg-white'
                                        : 'text-emerald-300 hover:text-white'
                                )}
                                aria-current={
                                    pathname === path ? 'page' : undefined
                                }
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
