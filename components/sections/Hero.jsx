import Image from "next/image";
import Button from "@/components/ui/Button.jsx";
import Container from "../ui/Container.jsx";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center px-5 sm:px-8 md:px-14 py-10">
            <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">

                {/* left side image */}
                <div className="flex justify-center md:justify-start">
                    <div className=" w-[280px] h-[360px] sm:w-[350px] sm:h-[450px] md:w-[420px] md:h-[550px] lg:w-[520px] lg:h-[650px] rounded-t-full overflow-hidden">
                        <Image src="/images/redesign/Dr. Maya Reynolds.png" alt="Lilac Flowers" width={800} height={900} className="object-cover w-full h-full" priority />
                    </div>
                </div>

                {/* right side */}
                <div className="space-y-6 sm:space-y-8 md:space-y-10 text-center md:text-left justify-self-center">
                    <h1 className=" text-4xl sm:text-5xl  md:text-6xl lg:text-7xl xl:text-[80px] leading-tight font-semibold ">  Live your life
                        <br />
                        in full bloom
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl justify-self-center"> Psychologist for Adults in Santa Monica, California. </p>

                    <div className="flex justify-center">
                        <Button> CONNECT WITH ME → </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
