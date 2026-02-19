import Image from "next/image";
import Container from "../ui/Container.jsx";
import ScrollAnimation from "../animations/Framer-motion.jsx";

const services = [
    {
        title: "Self-Esteem",
        description:
            "Building a strong sense of self-worth is key to living a fulfilled life—especially when high-achieving demands leave you feeling exhausted or unworthy.Let's work together to bolster your self-esteem through evidence-based CBT, mindfulness, and collaborative sessions focused on lasting confidence..",
        image: "/images/clone/img1.png",
    },
    {
        title: "Relationships",
        description:
            "Navigating relationships can be complex, especially when past trauma or anxiety impacts your confidence and connections.I'm here to guide high-achievers like you toward healthier bonds using collaborative CBT, EMDR, and insight-focused therapy",
        image: "/images/clone/img2.png",
    },
    {
        title: "Burnout",
        description:
            "Feeling overwhelmed by your career is more common than you think, especially for high-achieving entrepreneurs and professionals pushing through chronic stress.Together, we'll identify strategies to manage and prevent burnout using paced CBT, mindfulness, and body-oriented techniques for sustainable energy and reconnection.",
        image: "/images/clone/img3.png",
    },
];

export default function Services() {
    return (
        <section className="bg-background py-4 px-10  ">
            <Container>
                {/* section heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-semibold"> My Specialties </h2>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-3 bg-gradient-to-br from-amber-50 to-pink-50">
                    {services.map((service, index) => (
                        <div key={index}
                            className="border border-primary/40 p-8 flex flex-col justify-between" >

                            <div className="space-y-6">
                                <ScrollAnimation delay={1}>
                                    <h3 className="text-2xl font-heading font-medium">{service.title} </h3>
                                </ScrollAnimation>
                                <ScrollAnimation delay={2}>
                                    <p className="text-base leading-relaxed">{service.description} </p>
                                </ScrollAnimation>
                            </div>

                            {/* Circular Image */}
                            <div className="mt-10 flex justify-center">
                                <ScrollAnimation delay={3}>
                                    <div className="relative w-64 h-64 rounded-full overflow-hidden">
                                        <Image src={service.image} alt={service.title} fill className="object-cover" />
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
