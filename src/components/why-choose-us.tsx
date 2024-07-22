import CardWhyChooseUs from "./card-why-choose-us";
import image1 from "../assets/WhyChooseUs1.png";
import image2 from "../assets/WhyChooseUs2.png";
import image3 from "../assets/WhyChooseUs3.png";
import image4 from "../assets/WhyChooseUs4.png";
import Button from "./button";

const WhyChooseUs = () => {
  return (
    <div className="border-b bg-bgHeader px-10 py-12 text-colorTextBold lg:py-32 xl:pl-40 xl:pr-60">
      <h3 className="text-center text-xs uppercase text-red-500">
        Why Choose Us
      </h3>
      <p className="mt-10 text-center text-2xl font-bold leading-snug lg:text-4xl">
        People choose us because we <br /> serve the best for everyone
      </p>
      <div className="grid gap-12 border-b py-10 lg:grid-cols-2 lg:px-28 lg:py-32">
        <CardWhyChooseUs
          urlImage={image1}
          title="Dedicated project manager"
          content="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
        />
        <CardWhyChooseUs
          urlImage={image2}
          title="Organized tasks"
          content="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
        />
        <CardWhyChooseUs
          urlImage={image3}
          title="Easy feedback sharing"
          content="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
        />
        <CardWhyChooseUs
          urlImage={image4}
          title="Never miss deadline"
          content="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
        />
      </div>
      <div className="mt-20 flex flex-col items-center justify-between gap-8 lg:flex-row">
        <div>
          <strong className="text-xl font-bold lg:text-3xl">
            Ready to launch your next project?
          </strong>
          <p className="mt-5 opacity-50">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default WhyChooseUs;
