import ScrollAnimation from "../animations/Framer-motion";

export default function FooterBottom() {
    return (
        <div className="bg-[#e9e5dd] text-[#243b1b] py-8 sm:py-10">
            <div className="max-w-6xl mx-auto px-4 text-center space-y-6">

                {/* top sections */}
                <ScrollAnimation delay={4}>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-base underline cursor-pointer">
                        <span>Privacy & Cookies Policy</span>
                        <span>Good Faith Estimate</span>
                        <span>Website Terms & Conditions</span>
                        <span>Disclaimer</span>
                    </div>
                </ScrollAnimation>
                <p className="text-sm sm:text-base">
                    Website Template Credits:{" "}
                    <span className="underline cursor-pointer">Prem Kumar</span>
                </p>

                {/* bottom sections*/}
                <p className="text-xs sm:text-sm">
                    All Rights Reserved © 2025 Your Business Name Here, LLC.
                </p>

            </div>
        </div>
    );
}
