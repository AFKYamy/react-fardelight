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
            className="flex items-center p-15 mx-auto rounded-2xl relative min-h-80 bg-cover bg-center shadow-md bg-[rgba(255,255,255,0.4)] bg-blend-lighten overflow-hidden select-none container"
            style={heroBg ? { backgroundImage: `url(${heroBg})` } : { backgroundColor: `var(--color-${heroBgColor})` }}
        >
            <div className="flex flex-col gap-1 font-medium text-shadow-lg">
                {children}
            </div>

            <img 
                src={heroLogo} 
                alt="hero logo" 
                className="absolute w-120 h-auto right-20 bottom-[-8.5em]"
                draggable="false"
            />
        </header>
    )
}