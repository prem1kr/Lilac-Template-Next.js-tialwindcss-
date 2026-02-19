"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container.jsx";
import ScrollAnimation from "../animations/Framer-motion.jsx";

const faqs = [
    {
        question: "Do you take insurance?",
        answer: "I am an out-of-network provider; I provide superbills for insurance reimbursement—contact me to discuss your coverage and fees.",
    },
    {
        question: "Do you have any openings currently?",
        answer: "Yes, I currently have limited openings for new clients in my Santa Monica office and telehealth sessions—contact me directly to check availability and book.",
    },
    {
        question: "What are your rates?",
        answer: "My standard rate is $250–$350 per 50-minute session for psychologists in Santa Monica, with superbills provided for insurance reimbursement.",
    },

];

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#f7f3ec] py-12 sm:py-16">
            <Container>

                {/* left side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
                    <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] h-[420px] sm:h-[520px] md:h-[600px] lg:h-[670px] mx-auto lg:mx-0 rounded-t-full overflow-hidden justify-self-center">
                        <Image src="/images/clone/faq.png" alt="Decorative flowers" fill className="object-cover" />
                    </div>

                    {/* Right Content */}
                    <div className="text-[#243b1b] w-full px-10">
                        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 sm:mb-10 text-center lg:text-left"> FAQs </h2>

                        <div className="border-t border-[#243b1b] divide-y divide-[#243b1b]">

                            {faqs.map((item, index) => {
                                const isOpen = openIndex === index;

                                return (

                                    <div key={index} className="py-5 sm:py-6">
                                        <button onClick={() => toggleFAQ(index)} className="w-full flex items-start gap-4 text-left"  >
                                            <span className="text-2xl leading-none mt-1 cursor-pointer "> {isOpen ? "—" : "+"} </span>
                                            <ScrollAnimation delay={1}>
                                                <h3 className="text-lg sm:text-xl font-medium cursor-pointer"> {item.question} </h3>
                                            </ScrollAnimation>
                                        </button>
                                        <ScrollAnimation delay={2} >
                                            {isOpen && (<p className="pl-8 mt-3 text-sm sm:text-base max-w-xl"> {item.answer} </p>)}
                                        </ScrollAnimation>
                                    </div>
                                );
                            })}

                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
