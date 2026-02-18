import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";

export default function Overview() {
    return (
        <section className="bg-[#8a8752] text-white">
            <Container>
                <div className="min-h-[70vh] sm:min-h-[80vh] lg:min-h-[70vh] flex flex-col items-center justify-center text-center px-4">

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"> Get started today. </h2>

                    {/* Text */}
                    <p className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed mb-10">
                        Ready to ease anxiety, heal from trauma, or overcome burnout in a supportive Santa Monica space?
                        Contact me to book your first in-person or telehealth session—I'm here to guide high-achievers like you toward resilience and balance.
                        Let's start this journey to a calmer, more connected you.
                    </p>


                    {/* Button */}
                    <Button className="border border-white text-white px-8 py-4 text-sm sm:text-base">
                        GET IN TOUCH →
                    </Button>

                </div>
            </Container>
        </section>
    );
}
