import ScrollAnimation from "../animations/Framer-motion";
import Container from "../ui/Container";

export default function FooterTop() {
  return (
    <footer className="bg-[#fbf7f1] text-[#243b1b] py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left px-12">

          {/* left side */}
          <ScrollAnimation delay={1} >
            <div>
              <h3 className="text-3xl sm:text-3xl font-semibold mb-4 sm:mb-6"> Lilac Template </h3>
              <p className="mb-4 text-3xl sm:text-base">  123th Street 45 W,  <br /> Santa Monica, CA 90401 </p>
              <p className="underline mb-2 text-sm sm:text-base cursor-pointer"> email@example.com </p>
              <p className="underline text-sm sm:text-base cursor-pointer"> (555) 555-5555 </p>
            </div>
          </ScrollAnimation>
          {/* middle section*/}
          <ScrollAnimation delay={2}>
            <div className="md:text-center">
              <h4 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6"> Hours </h4>
              <p className="text-sm sm:text-base"> Monday – Friday<br /> 10am – 6pm </p>
            </div>
          </ScrollAnimation>
          {/* right side */}
          <ScrollAnimation delay={3} >
            <div className="md:text-right">
              <h4 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6"> Find </h4>

              <ul className="space-y-2 sm:space-y-3 underline text-sm sm:text-base cursor-pointer">
                <li>Home</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </Container>
    </footer>
  );
}
