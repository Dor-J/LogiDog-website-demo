import React from 'react'

function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 px-4 py-6 text-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center space-y-2 sm:flex-row sm:justify-between sm:space-y-0">
                <div className="font-mono text-sm sm:text-base">
                    &copy; 2025{' '}
                    <strong className="font-semibold">LogiDog</strong>. All
                    rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
