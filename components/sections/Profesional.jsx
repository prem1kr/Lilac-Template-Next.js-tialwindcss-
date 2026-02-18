"use client";

import { useState } from "react";
import Container from "../ui/Container.jsx";

const sections = [
    {
        title: "Education",
        content:
            "psychologist specializing in evidence-based methods like CBT, EMDR, mindfulness-based practices, and body-oriented techniques.Focuses on anxiety, panic, trauma (single-incident and complex), burnout, perfectionism, and high-achiever stress for sustainable insight and resilience.",
    },
    {
        title: "Licensure",
        content: "Licensed clinical psychologist in California requires a doctoral degree in psychology, 3,000 supervised hours, and passing the EPPP national exam plus CPLEE state exam.This ensures expertise in evidence-based therapies like CBT and EMDR for safe treatment of anxiety, trauma, and burnout.",
    },
    {
        title: "Certifications",
        content: "Certifications are voluntary credentials from professional organizations demonstrating specialized expertise beyond licensure, like CCTP for trauma or EMDR-specific training.For psychologists using CBT, EMDR, or mindfulness, they prove advanced skills in targeted areas like anxiety and burnout treatment.",
    },
];

export default function ProfessionalBackground() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#e9e4dc] py-20">
            <Container>
                <div className="max-w-4xl mx-auto text-[#243b1b] px-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-14"> My Professional Background </h2>

                    <div className=" border-t border-[#243b1b]  ">
                        {sections.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (

                                <div key={index} className="border-b border-[#243b1b] py-6 px-10" >
                                    <button onClick={() => toggle(index)} className="w-full flex items-center justify-between text-left " >
                                        <h3 className="text-xl sm:text-2xl font-medium cursor-pointer"> {item.title} </h3>
                                        <span className="text-2xl cursor-pointer"> {isOpen ? "—" : "+"} </span>
                                    </button>

                                    {isOpen && (
                                        <p className="mt-6 max-w-full text-sm sm:text-base leading-relaxed px-20 font-semibold "> {item.content} </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                </div>
            </Container>
        </section>
    );
}
