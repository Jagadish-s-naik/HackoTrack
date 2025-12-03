import React, { useState } from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { ArrowRight, Layers, Zap, Palette, Layout } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
    {
        title: "Modern Aesthetics",
        description: "Elevate your UI with stunning background gradient animations that capture attention.",
        icon: Palette,
        buttonText: "Explore Design",
    },
    {
        title: "Seamless Integration",
        description: "Drop-in ready component for your React applications. Works with Tailwind CSS.",
        icon: Layers,
        buttonText: "View Docs",
    },
    {
        title: "High Performance",
        description: "Optimized animations using native CSS and minimal JavaScript overhead.",
        icon: Zap,
        buttonText: "Check Speed",
    },
    {
        title: "Fully Customizable",
        description: "Control colors, speed, and blending modes to match your brand identity.",
        icon: Layout,
        buttonText: "Customize Now",
    },
];

export function BackgroundGradientAnimationDemo() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <BackgroundGradientAnimation>
            <div className="absolute inset-0 z-50 flex h-full w-full">
                {/* Main Content */}
                <div className="flex flex-1 flex-col items-center justify-center px-4 text-center md:px-10">
                    <div className="max-w-4xl space-y-8 p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-500 hover:bg-white/10">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md shadow-inner ring-1 ring-white/20">
                            {React.createElement(slides[currentSlide].icon, {
                                className: "h-10 w-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]",
                            })}
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-lg">
                                {slides[currentSlide].title}
                            </h1>
                            <p className="mx-auto max-w-2xl text-lg text-white/80 md:text-xl font-light leading-relaxed">
                                {slides[currentSlide].description}
                            </p>
                        </div>

                        <button
                            onClick={nextSlide}
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white/10 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] ring-1 ring-white/30"
                        >
                            <span>{slides[currentSlide].buttonText}</span>
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </button>
                    </div>
                </div>

                {/* Side Navigation Panel */}
                <div className="absolute right-0 top-0 flex h-full w-24 flex-col items-center justify-center gap-6 border-l border-white/5 bg-black/20 backdrop-blur-md">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={cn(
                                "group relative flex h-3 w-3 items-center justify-center rounded-full transition-all duration-300",
                                currentSlide === index ? "h-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "bg-white/30 hover:bg-white/60 hover:scale-125"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <span className="absolute right-8 hidden rounded-md bg-black/80 px-2 py-1 text-xs text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 whitespace-nowrap">
                                {slides[index].title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </BackgroundGradientAnimation>
    );
}
