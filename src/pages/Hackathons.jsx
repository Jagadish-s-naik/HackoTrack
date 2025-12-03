import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import HackathonCard from '../components/HackathonCard';

export default function Hackathons() {
    const [searchTerm, setSearchTerm] = useState('');
    const [hackathons, setHackathons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/hackathons')
            .then(res => res.json())
            .then(data => {
                setHackathons(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch hackathons:", err);
                setLoading(false);
            });
    }, []);

    const filteredHackathons = hackathons.filter(hackathon =>
        hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hackathon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (loading) {
        return <div className="text-white text-center py-20">Loading events...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                <div>
                    <h1 className="text-4xl font-bold text-white mb-2">Explore Hackathons</h1>
                    <p className="text-gray-400">Find your next challenge and build something amazing.</p>
                </div>

                <div className="flex gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search hackathons, tags..."
                            className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                        <Filter className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredHackathons.map(hackathon => (
                    <HackathonCard key={hackathon.id} hackathon={hackathon} />
                ))}
            </div>

            {filteredHackathons.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-xl">No hackathons found matching your criteria.</p>
                </div>
            )}
        </div>
    );
}
