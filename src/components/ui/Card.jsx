import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Card({ children, className, hover = true, ...props }) {
    return (
        <div
            className={twMerge(clsx(
                "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden",
                hover && "hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10",
                className
            ))}
            {...props}
        >
            {children}
        </div>
    );
}
