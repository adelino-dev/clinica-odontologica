import Hero from "../sections/Hero";
import WhyChooseUs from "../sections/WhyChooseUs";
import Testimonials from "../sections/Testimonials";
import About from "../sections/About";
import Treatments from "../sections/Treatments";
import HowItWorks from "../sections/HowItWorks";
import FAQ from "../sections/FAQ";
import Location from "../sections/Location";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

function Home() {
    return (
        <>
            <Hero />
            <WhyChooseUs />
            <Testimonials />
            <About />
            <Treatments />
            <HowItWorks />
            <FAQ />
            <Location />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;