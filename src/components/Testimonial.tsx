"use client";

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

export default function TestimonialTicker() {
    const duplicated = [...testimonials, ...testimonials];

    return (
        <section className="bg-bg py-24 text-text-primary overflow-hidden">
            <div className="container">
                <h2 className="text-3xl md:text-5xl font-bold font-Orbitron text-center mb-16">
                    What Our Users Say
                </h2>

                <div className="overflow-hidden max-w-[1440px] mask-[linear-gradient(to_right,transparent_0%,white_30%,white_70%,transparent_100%)]">
                    <div className="flex w-[max-content] flex-nowrap gap-[1rem] animate-marquee">
                        {duplicated.map((t, i) => (
                            <div
                                key={i}
                                className="bg-card p-6 rounded-2xl shadow-md flex-shrink-0 mx-4 break-words w-64 sm:w-72 md:w-80 lg:w-96"
                            >
                                <p className="text-text-secondary text-sm font-Inter italic leading-relaxed">
                                    {t.quote}
                                </p>
                                <p className="text-xl font-semibold font-Montserrat text-center mt-4">
                                    {t.name}
                                </p>
                                <p className="text-center text-sm text-text-secondary">
                                    {t.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
