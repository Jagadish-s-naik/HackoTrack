import { useEffect } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

export default function Modal({ isOpen, onClose, title, children }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-[#0a0a0a] border border-[#4ade80]/20 rounded-xl shadow-[0_0_50px_rgba(74,222,128,0.1)] p-6 animate-scale-up">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-[#4ade80] transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {children}
            </div>
        </div>,
        document.body
    );
}
