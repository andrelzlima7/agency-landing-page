import CardImageCaseStudies from "./card-image-case-studies";
import imageCard1 from "../assets/card1.png";
import imageCard2 from "../assets/card2.png";
import imageCard3 from "../assets/card3.png";
import imageCard4 from "../assets/card4.png";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  return (
    <div className="my-12 px-10 text-colorTextBold lg:my-32 xl:pl-40 xl:pr-60">
      <h3 className="text-center text-xs uppercase text-red-500">
        Case Studies
      </h3>
      <p className="mt-10 text-center text-xl font-bold leading-snug lg:text-4xl">
        Our works describe why we are <br /> the best in the business
      </p>
      <div className="flex flex-col items-center justify-center py-12 lg:flex-row lg:gap-20 lg:py-24">
        <div>
          <CardImageCaseStudies
            author="Aura Branding Design"
            role="Graphic Design"
            urlImage={imageCard1}
          />
          <CardImageCaseStudies
            author="Gradient Website Development"
            role="Graphic Design"
            urlImage={imageCard2}
          />
        </div>
        <div>
          <CardImageCaseStudies
            author="AB.S Snack Packaging"
            role="Graphic Design"
            urlImage={imageCard3}
          />
          <CardImageCaseStudies
            author="Magazine Content Writing"
            role="Graphic Design"
            urlImage={imageCard4}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <a
          className="flex items-center gap-6 font-bold text-bluePage hover:opacity-80"
          href="/"
        >
          See all works <ArrowRight />
        </a>
      </div>
    </div>
  );
};

export default CaseStudies;
