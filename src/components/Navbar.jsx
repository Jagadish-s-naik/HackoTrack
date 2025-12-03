import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

export default function Navbar() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <Link to="/" className="text-white font-bold text-2xl tracking-tighter flex items-center gap-1">
                                Hacko<span className="text-[#4ade80]">Track</span>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link to="/" className="text-gray-400 hover:text-[#4ade80] text-xs font-bold uppercase tracking-widest transition-colors">
                                    Home
                                </Link>
                                <Link to="/hackathons" className="text-gray-400 hover:text-[#4ade80] text-xs font-bold uppercase tracking-widest transition-colors">
                                    Hackathons
                                </Link>
                                <Link to="/dashboard" className="text-gray-400 hover:text-[#4ade80] text-xs font-bold uppercase tracking-widest transition-colors">
                                    Dashboard
                                </Link>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={() => setIsLoginOpen(true)}
                                className="bg-white hover:bg-[#4ade80] text-black hover:text-black px-6 py-2 rounded-sm text-sm font-bold transition-all flex items-center gap-2"
                            >
                                Login <span className="text-lg">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
}
