import { useState } from "react";

export default function ZoomImage({ ...attrs }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* thumbnail */}
            <span className="max-w-max cursor-zoom-in transition-transform duration-200 hover:scale-105">
                <img 
                    {...attrs}
                    onClick={() => setIsOpen(true)}
                />
            </span>

            {/* modal aka zoomed image */}
            {isOpen && (
                <div
                    className="flex items-center justify-center p-4 fixed inset-0 z-50 bg-black/70 cursor-zoom-out"
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        {...attrs}
                        className="rounded shadow-lg w-auto h-[50vh]"
                    />
                </div>
            )}
        </>
    )
}