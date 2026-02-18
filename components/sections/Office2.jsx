import Image from "next/image";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";

export default function CTA() {
    return (
        <section className="bg-[#d9d6e1]">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

                    {/* left side */}
                    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-screen">
                        <Image src="/images/redesign/office2.jpeg" alt="Therapy office interior" fill priority className="object-cover" />
                    </div>

                    {/* right side */}
                    <div className="flex items-center">
                        <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 py-12 lg:py-0 text-[#162315]">

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">  Reconnect in a Healing Space </h1>

                            <p className="mb-6 text-lg">  If you are facing any of these, there’s hope: </p>

                            <ul className="space-y-4 mb-10 text-base list-disc list-inside">
                                <li>Feeling functional on the outside yet exhausted inside</li>
                                <li>Stuck exploring lingering past experiences</li>
                                <li>Grappling with perfectionism and high internal pressure</li>
                                <li>Navigating emotional edges and constant tension</li>
                                <li>Struggling to thrive amid fast-paced life demands</li>
                            </ul>

                            <div className="border-t border-[#b8b3c7] pt-8">
                                <div className="flex justify-center lg:justify-start">
                                    <Button>   GET IN TOUCH →  </Button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
