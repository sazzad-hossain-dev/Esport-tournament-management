import { FC } from "react";

// Importing components

import FAQ from "@/components/FAQ";
import Features from "@/components/Feature";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";

// Main Home component
const Home: FC = () => {
    return (
        <div className="w-full min-h-screen bg-bg">
            <Hero />
            <HowItWorks />
            <Features />
            <Testimonial />
            <Pricing />
            <FAQ />
        </div>
    );
};

export default Home;
