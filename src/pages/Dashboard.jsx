import { useState, useEffect } from 'react';
import HackathonCard from '../components/HackathonCard';
import { Trophy, Clock, Target } from 'lucide-react';

export default function Dashboard() {
    const [registeredEvents, setRegisteredEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/registrations')
            .then(res => res.json())
            .then(data => {
                setRegisteredEvents(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch registrations:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-white text-center py-20">Loading dashboard...</div>;

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-white mb-8">My Dashboard</h1>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mr-4">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm">Upcoming Events</p>
                        <p className="text-2xl font-bold text-white">2</p>
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 mr-4">
                        <Target className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm">Projects Submitted</p>
                        <p className="text-2xl font-bold text-white">5</p>
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 mr-4">
                        <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm">Wins</p>
                        <p className="text-2xl font-bold text-white">1</p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Registered Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {registeredEvents.map(hackathon => (
                    <HackathonCard key={hackathon.id} hackathon={hackathon} />
                ))}
            </div>
        </div>
    );
}
