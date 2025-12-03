import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Button({
    children,
    className,
    variant = 'primary',
    size = 'md',
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 shadow-lg shadow-blue-500/25",
        secondary: "bg-purple-600 hover:bg-purple-700 text-white hover:scale-105 shadow-lg shadow-purple-500/25",
        outline: "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
        ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/5"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    return (
        <button
            className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
            {...props}
        >
            {children}
        </button>
    );
}
