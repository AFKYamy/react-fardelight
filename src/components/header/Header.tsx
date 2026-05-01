import type React from "react";

type Header = {
    heroBg?: string;
    heroBgColor?: string;
    heroLogo: string;
    children: React.ReactNode;
}

export default function Header({ heroBg, heroBgColor, heroLogo, children }: Header) {
    return (
        <header 
            className="flex items-center px-6 py-10 mx-auto relative min-h-72 bg-cover bg-center shadow-md bg-[rgba(255,255,255,0.4)] bg-blend-lighten overflow-hidden select-none sm:p-15 sm:min-h-80 sm:rounded-2xl container"
            style={heroBg ? { backgroundImage: `url(${heroBg})` } : { backgroundColor: `var(--color-${heroBgColor})` }}
        >
            <div className="relative z-10 flex flex-col gap-1 max-w-[min(100%,42rem)] font-medium text-shadow-lg">
                {children}
            </div>

            <img 
                src={heroLogo} 
                alt="hero logo" 
                className="absolute w-56 h-auto right-[-3rem] bottom-[-3rem] sm:w-80 sm:right-8 sm:bottom-[-5rem] lg:w-120 lg:right-20 lg:bottom-[-8.5em]"
                draggable="false"
            />
        </header>
    )
}
