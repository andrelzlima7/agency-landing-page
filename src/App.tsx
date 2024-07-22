import CaseStudies from "./components/case-studies";
import Footer from "./components/footer";
import Header from "./components/header";
import OurServices from "./components/our-services";
import OurStory from "./components/our-story";
import Testimonial from "./components/testimonial";
import WhyChooseUs from "./components/why-choose-us";

function App() {
  return (
    <>
      <Header />
      <main>
        <OurServices />
        <OurStory />
        <WhyChooseUs />
        <CaseStudies />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}

export default App;
