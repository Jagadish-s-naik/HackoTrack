import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function Register() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [hackathon, setHackathon] = useState(null);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        teamName: '',
        experience: 'beginner'
    });

    useEffect(() => {
        fetch('/api/hackathons')
            .then(res => res.json())
            .then(data => {
                const found = data.find(h => h.id === parseInt(id));
                setHackathon(found);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    hackathonId: parseInt(id),
                    ...formData
                })
            });

            if (response.ok) {
                navigate('/dashboard');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('An error occurred');
        }
    };

    if (loading) return <div className="text-white text-center py-20">Loading...</div>;

    if (!hackathon) {
        return <div className="text-white text-center py-20">Event not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-12 flex justify-center">
            <Card className="w-full max-w-2xl p-8">
                <h1 className="text-3xl font-bold text-white mb-2">Register for {hackathon.title}</h1>
                <p className="text-gray-400 mb-8">Fill out the form below to secure your spot.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Team Name (Optional)</label>
                        <input
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            value={formData.teamName}
                            onChange={e => setFormData({ ...formData, teamName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Experience Level</label>
                        <select
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors [&>option]:bg-gray-900"
                            value={formData.experience}
                            onChange={e => setFormData({ ...formData, experience: e.target.value })}
                        >
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>

                    <Button type="submit" className="w-full mt-4">
                        Complete Registration
                    </Button>
                </form>
            </Card>
        </div>
    );
}
