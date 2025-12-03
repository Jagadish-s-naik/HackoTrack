import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-white font-bold text-xl tracking-tighter mb-4 block">
                            Hacko<span className="text-blue-500">Track</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm">
                            The ultimate platform for developers to discover, track, and join the best hackathons and tech events worldwide.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Platform</h3>
                        <ul className="space-y-2">
                            <li><Link to="/hackathons" className="text-gray-400 hover:text-blue-400 transition-colors">Hackathons</Link></li>
                            <li><Link to="/events" className="text-gray-400 hover:text-blue-400 transition-colors">Events</Link></li>
                            <li><Link to="/dashboard" className="text-gray-400 hover:text-blue-400 transition-colors">Dashboard</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} HackoTrack. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
