import Image from "next/image";
import Button from "@/components/ui/Button.jsx";
import Container from "../ui/Container.jsx";

export default function Office1() {
  return (
    <section className="bg-[#fbf7f1]">
      <Container className="grid md:grid-cols-2 min-h-screen">

        {/* left side */}
        <div className="order-2 md:order-1 flex flex-col justify-center px-6 sm:px-10 md:px-20 py-24 md:py-32 space-y-8">

          <h2 className="text-4xl md:text-5xl font-heading font-semibold leading-tight tracking-tight max-w-xl text-[#1f2933]">
            Find Calm in Every Session.
          </h2>

          <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-lg text-gray-700">
            <p>
              Life's demands can leave you overwhelmed, but my Santa Monica
              office offers a quiet, private sanctuary designed for grounding—
              with natural light, comfortable furnishings, and an uncluttered
              space that helps you feel at ease from the moment you arrive.
            </p>

            <p>
              As a licensed clinical psychologist specializing in anxiety,
              trauma, burnout, and high-achiever stress, I provide warm,
              collaborative in-person therapy using CBT, EMDR, and mindfulness
              to build resilience and regulation.
            </p>
          </div>

          <div className="border-t border-black/10 pt-6">
            <div className="flex justify-center md:justify-start">
              <Button>
                GET IN TOUCH →
              </Button>
            </div>
          </div>

        </div>

        {/* right side */}
        <div className="order-1 md:order-2 relative h-[60vh] md:h-auto">
          <Image
            src="/images/redesign/office1.jpeg"
            alt="Calm therapy office space"
            fill
            className="object-cover"
            priority
          />
        </div>

      </Container>
    </section>
  );
}
