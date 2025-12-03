import express from 'express';
import Hackathon from './models/Hackathon.js';
import Registration from './models/Registration.js';

export const router = express.Router();

// Seed data if empty
const seedData = async () => {
    const count = await Hackathon.count();
    if (count === 0) {
        const hackathons = [
            {
                title: "Global AI Challenge 2024",
                date: "Dec 15-17, 2024",
                location: "Online",
                description: "Build the next generation of AI applications. Focus on LLMs, Computer Vision, and NLP.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
                tags: ["AI/ML", "Python", "Cloud"],
                prize: "$50,000"
            },
            {
                title: "Web3 Innovation Summit",
                date: "Jan 20-22, 2025",
                location: "San Francisco, CA",
                description: "Create decentralized applications that solve real-world problems. DeFi, NFTs, and DAO tools.",
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
                tags: ["Blockchain", "Solidity", "React"],
                prize: "$100,000"
            },
            {
                title: "Green Tech Hackathon",
                date: "Feb 10-12, 2025",
                location: "London, UK",
                description: "Develop sustainable technology solutions for a better future. Energy efficiency, waste reduction, and more.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
                tags: ["Sustainability", "IoT", "Data Science"],
                prize: "$25,000"
            },
            {
                title: "FinTech Revolution",
                date: "Mar 05-07, 2025",
                location: "New York, NY",
                description: "Reimagine the future of finance. Banking, payments, and personal finance management.",
                image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=1000",
                tags: ["FinTech", "Security", "Mobile"],
                prize: "$75,000"
            },
            {
                title: "HealthHacks 2025",
                date: "Apr 15-17, 2025",
                location: "Boston, MA",
                description: "Innovate in healthcare technology. Telemedicine, wearable data, and patient care.",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
                tags: ["Healthcare", "MedTech", "AI"],
                prize: "$40,000"
            },
            {
                title: "GameDev Jam",
                date: "May 20-22, 2025",
                location: "Online",
                description: "Create an engaging game in 48 hours. Focus on gameplay, art, and sound design.",
                image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=1000",
                tags: ["Game Dev", "Unity", "Unreal"],
                prize: "$10,000"
            }
        ];
        await Hackathon.bulkCreate(hackathons);
        console.log('Seeded initial hackathon data');
    }
};

// Initialize seeding check
setTimeout(seedData, 1000); // Small delay to ensure DB sync

// Get all hackathons
router.get('/hackathons', async (req, res) => {
    try {
        const hackathons = await Hackathon.findAll();
        res.json(hackathons);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Register for a hackathon
router.post('/register', async (req, res) => {
    const { hackathonId, name, email, teamName, experience } = req.body;

    if (!hackathonId || !name || !email) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const newRegistration = await Registration.create({
            hackathonId,
            name,
            email,
            teamName,
            experience
        });
        res.status(201).json(newRegistration);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get user registrations
router.get('/registrations', async (req, res) => {
    try {
        const registrations = await Registration.findAll();

        // Fetch hackathon details for each registration
        // In a real app, we'd use associations (include: Hackathon)
        const results = await Promise.all(registrations.map(async (reg) => {
            const hackathon = await Hackathon.findByPk(reg.hackathonId);
            return {
                ...hackathon.toJSON(),
                registrationDate: reg.date
            };
        }));

        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
