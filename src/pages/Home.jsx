import { Link } from 'react-router-dom';
import { Calendar, Trophy, Users, ArrowRight } from 'lucide-react';
import Hero3D from '../components/3d/Hero3D';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center">

                {/* 3D Background - Positioned Right */}
                <div className="absolute right-0 top-0 w-full md:w-1/2 h-full z-0">
                    <Hero3D />
                </div>

                <div className="container mx-auto px-4 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
                    {/* Left Content */}
                    <div className="pt-20">
                        <h2 className="text-[#4ade80] font-bold tracking-widest mb-4 animate-fade-in-up">
                            HACKOTRACK
                        </h2>
                        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none text-white animate-fade-in-up delay-100">
                            SMART <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                                HACKATHONS
                            </span>
                        </h1>

                        <div className="flex items-center gap-4 mb-8 animate-fade-in-up delay-200">
                            <div className="w-16 h-16 rounded-lg overflow-hidden border border-[#4ade80]/30">
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100"
                                    alt="User"
                                    className="w-full h-full object-cover opacity-80"
                                />
                            </div>
                            <p className="text-gray-400 max-w-sm text-sm border-l-2 border-[#4ade80] pl-4">
                                Innovative solutions in AI, IoT, and Blockchain to drive digital transformation and enhance your skills.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-200">
                            <Link to="/hackathons">
                                <Button className="bg-[#4ade80] text-black hover:bg-[#22c55e] border-none rounded-sm px-8 py-4 font-bold text-lg flex items-center gap-2">
                                    Explore Solutions <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                        </div>

                        {/* Stats / Bottom Info */}
                        <div className="mt-20 border-t border-white/10 pt-8 flex gap-12">
                            <div>
                                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Total Events</p>
                                <div className="flex items-center gap-2 text-[#4ade80]">
                                    <Trophy className="w-4 h-4" />
                                    <span className="font-bold text-xl">124 K</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Bandwidth</p>
                                <div className="flex items-center gap-2 text-[#4ade80]">
                                    <Users className="w-4 h-4" />
                                    <span className="font-bold text-xl">Unlimited</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
