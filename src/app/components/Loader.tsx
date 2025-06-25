import React from 'react'

export interface LoaderProps {
    ClassNameProp?: string
}

function Loader({ ClassNameProp }: LoaderProps) {
    return (
        <div className={ClassNameProp ?? ''}>
            <div className="relative flex h-32 w-32 items-center justify-center">
                <div className="absolute inset-0 animate-pulse rounded-xl bg-blue-500/20 blur-xl"></div>

                <div className="relative flex h-full w-full items-center justify-center">
                    <div className="absolute inset-0 animate-spin rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-sm"></div>

                    <div className="absolute inset-1 flex items-center justify-center overflow-hidden rounded-lg bg-gray-900">
                        <div className="flex items-center gap-1">
                            <div className="h-12 w-1.5 animate-[bounce_1s_ease-in-out_infinite] rounded-full bg-cyan-500"></div>
                            <div className="h-12 w-1.5 animate-[bounce_1s_ease-in-out_infinite_0.1s] rounded-full bg-blue-500"></div>
                            <div className="h-12 w-1.5 animate-[bounce_1s_ease-in-out_infinite_0.2s] rounded-full bg-indigo-500"></div>
                            <div className="h-12 w-1.5 animate-[bounce_1s_ease-in-out_infinite_0.3s] rounded-full bg-purple-500"></div>
                        </div>

                        <div className="absolute inset-0 animate-pulse bg-gradient-to-t from-transparent via-blue-500/10 to-transparent"></div>
                    </div>
                </div>

                <div className="absolute -top-1 -left-1 h-2 w-2 animate-ping rounded-full bg-blue-500"></div>
                <div className="absolute -top-1 -right-1 h-2 w-2 animate-ping rounded-full bg-purple-500 delay-100"></div>
                <div className="absolute -bottom-1 -left-1 h-2 w-2 animate-ping rounded-full bg-cyan-500 delay-200"></div>
                <div className="absolute -right-1 -bottom-1 h-2 w-2 animate-ping rounded-full bg-blue-500 delay-300"></div>
            </div>
        </div>
    )
}

export default Loader
