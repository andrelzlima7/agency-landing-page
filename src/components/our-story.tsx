import image1 from "../assets/our-story-image1.png";
import image2 from "../assets/our-story-image2.png";
import image3 from "../assets/our-story-image3.png";
import fill from "../assets/Fill2.png";
import InfoOurService from "./info-our-services";

const OurStory = () => {
  return (
    <div className="my-24 flex flex-col items-center px-10 lg:px-20 xl:pl-40 xl:pr-60">
      <div className="flex flex-col items-center gap-20 xl:flex-row">
        <div>
          <h3 className="text-xs uppercase text-red-500">Our Story</h3>
          <p className="mt-10 text-xl font-bold leading-snug lg:text-4xl">
            We know how everything works and why your business is failing over
            and over again.
          </p>
          <img src={image1} alt="" className="mx-auto mt-12 lg:mt-32" />
        </div>
        <div>
          <div className="flex items-center gap-24">
            <span className="relative">
              <img src={image2} alt="" />
              <img src={fill} alt="" className="absolute -right-12 -top-12" />
            </span>
            <span>
              <img src={image3} alt="" className="mt-10" />
            </span>
          </div>
          <p className="mt-24 opacity-50">
            We share common trends and strategies for improving your rental
            income and making sure you stay in high demand. With lots of unique
            blocks, you can easily build a page without coding. Build your next
            landing page.
          </p>
        </div>
      </div>
      <div className="mt-32 flex flex-col gap-16 text-colorTextBold lg:flex-row">
        <InfoOurService
          content="Customers visit Omega every month to get their service done."
          info="1M+"
        />
        <InfoOurService
          content="Satisfaction rate comes from our awesome customers."
          info="92%"
        />
        <InfoOurService
          content="Average customer ratings we have got all over internet."
          info="4.9/5.0"
        />
      </div>
    </div>
  );
};

export default OurStory;
