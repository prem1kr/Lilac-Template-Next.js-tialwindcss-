import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function About() {
    return (
        <section className="bg-[#ece8df] py-0">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12 min-h-[auto] lg:min-h-[90vh] py-20">

                    {/* right side*/}
                    <div className="relative order-1 lg:order-2 w-full max-w-[400px] h-[300px] sm:h-[300px] md:h-[520px] lg:h-[650px] mx-auto">

                        <div className="absolute inset-0 rounded-t-full overflow-hidden">
                            <Image src="/images/redesign/Dr. Maya Reynolds.png" alt="Lilac flowers" fill className="object-cover" />
                        </div>

                        <div className="absolute -bottom-6 sm:-bottom-10 -right-2 sm:-right-6 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[#ece8df]">
                            <Image src="/images/clone/flower.png" alt="White flowers" fill className="object-cover" />
                        </div>
                    </div>

                    {/* left side */}
                    <div className="order-2 lg:order-1 text-[#243b1b] text-center lg:text-left justify-self-center max-w-xl content-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 justify-self-center"> Hi, I’m Dr. Maya Reynolds, PsyD </h1>

                        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10 justify-self-center">
                            I’m a licensed psychologist in Santa Monica, CA, offering a safe space for high-achievers tackling anxiety, trauma, burnout, and overthinking.
                            With empathy and tools like CBT, EMDR, and mindfulness, we collaboratively build regulation, resilience, and sustainable thriving—in-person or telehealth.
                            If you’re functional yet exhausted in a fast-paced world, let’s navigate challenges toward deeper insight and reconnection.
                        </p>

                        <div className="flex justify-center lg:justify-start justify-self-center">
                            <Button> LET’S CHAT → </Button>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
