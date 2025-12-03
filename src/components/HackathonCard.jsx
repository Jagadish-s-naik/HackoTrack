import { Calendar, MapPin, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from './ui/Card';
import Button from './ui/Button';

export default function HackathonCard({ hackathon }) {
    return (
        <Card className="flex flex-col h-full p-0 group">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <button className="bg-white/10 hover:bg-[#4ade80] hover:text-black text-white border border-white/20 px-6 py-2 rounded-full text-sm font-bold backdrop-blur-md transition-all transform translate-y-4 group-hover:translate-y-0">
                        Quick View
                    </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#4ade80] transition-colors">{hackathon.title}</h3>
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {hackathon.tags.map(tag => (
                            <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-[#4ade80]/10 text-[#4ade80] rounded-sm border border-[#4ade80]/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col border-t border-white/5 bg-[#0a0a0a] group-hover:bg-[#0f0f0f] transition-colors">
                <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-1 group-hover:text-gray-300 transition-colors">
                    {hackathon.description}
                </p>

                <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-400 text-sm group-hover:text-white transition-colors">
                        <Calendar className="w-4 h-4 mr-3 text-[#4ade80]" />
                        {hackathon.date}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm group-hover:text-white transition-colors">
                        <MapPin className="w-4 h-4 mr-3 text-[#4ade80]" />
                        {hackathon.location}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm group-hover:text-white transition-colors">
                        <DollarSign className="w-4 h-4 mr-3 text-[#4ade80]" />
                        Prize Pool: {hackathon.prize}
                    </div>
                </div>

                <Link to={`/register/${hackathon.id}`} className="w-full">
                    <Button className="w-full bg-white/5 hover:bg-[#4ade80] hover:text-black border border-white/10 hover:border-[#4ade80] text-white transition-all duration-300">
                        Register Now
                    </Button>
                </Link>
            </div>
        </Card>
    );
}
