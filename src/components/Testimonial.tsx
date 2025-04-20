"use client";
import { useEffect, useRef } from "react";

const testimonials = [
    {
        quote: "This platform made organizing our esports tournaments so easy. We could focus on the fun while everything else ran smoothly!",
        name: "John Doe",
        role: "Tournament Organizer",
    },
    {
        quote: "As a player, I loved the smooth interface and how quickly results were posted. It made my tournament experience top-notch!",
        name: "Jane Smith",
        role: "Pro Player",
    },
    {
        quote: "This platform has been fantastic for connecting players and organizers in a seamless way.",
        name: "Sarah Lee",
        role: "Team Manager",
    },
    {
        quote: "The experience was amazing! Highly recommend using this platform for any esports events.",
        name: "Mike Ross",
        role: "Professional Gamer",
    },
];

const TestimonialTicker = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrameId: number;
        const container = containerRef.current;
        const content = contentRef.current;

        if (!container || !content) return;

        const scrollSpeed = 0.5;

        const scroll = () => {
            if (container.scrollLeft >= content.scrollWidth / 2) {
                container.scrollLeft = 0;
            } else {
                container.scrollLeft += scrollSpeed;
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section className="bg-bg py-24 text-text-primary">
            <div className="container">
                <h2 className="text-3xl md:text-5xl font-bold font-Orbitron text-center mb-16">
                    What Our Users Say
                </h2>

                <div
                    ref={containerRef}
                    className="overflow-hidden whitespace-nowrap w-full"
                >
                    <div ref={contentRef} className="inline-flex">
                        {[...testimonials, ...testimonials].map(
                            (testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-card p-6 rounded-2xl shadow-md max-w-xs w-[20rem] mx-4 flex-shrink-0 break-words"
                                >
                                    <p className="text-text-secondary text-sm font-Inter italic leading-relaxed break-words">
                                        {testimonial.quote}
                                    </p>
                                    <p className="text-xl font-semibold font-Montserrat text-center mt-4">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-center text-sm text-text-secondary">
                                        {testimonial.role}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialTicker;
