import { useState } from 'react';
import Modal from './ui/Modal';
import Button from './ui/Button';

export default function LoginModal({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock login logic
        console.log('Login:', { email, password });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Welcome Back">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                    <input
                        type="email"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4ade80] transition-colors"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                    <input
                        type="password"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4ade80] transition-colors"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <Button className="w-full bg-[#4ade80] text-black hover:bg-[#22c55e] border-none font-bold mt-2">
                    Sign In
                </Button>

                <p className="text-center text-xs text-gray-500 mt-4">
                    Don't have an account? <span className="text-[#4ade80] cursor-pointer hover:underline">Sign up</span>
                </p>
            </form>
        </Modal>
    );
}
