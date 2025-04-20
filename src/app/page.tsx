import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
export default function Home() {
    return (
        <div className="w-full min-h-screen bg-bg">
            <Header />
            <Hero />
            <HowItWorks />
        </div>
    );
}
