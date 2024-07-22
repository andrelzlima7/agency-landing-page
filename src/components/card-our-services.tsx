import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

type Variant = "blue" | "green" | "red";

interface PropsCardOurServices {
  title: string;
  content: string;
  urlImage: string;
  variant: Variant;
}

const CardOurServices = ({
  content,
  title,
  urlImage,
  variant,
}: PropsCardOurServices) => {
  const getClassNames = (variant: Variant) => {
    switch (variant) {
      case "blue":
        return "bg-bluePage";
      case "green":
        return "bg-greenPage";
      case "red":
        return "bg-redPage";
    }
  };

  return (
    <div
      className={twMerge(
        getClassNames(variant),
        "z-50 flex max-w-[350px] flex-col items-center justify-center rounded-md p-9 text-white drop-shadow-md",
      )}
    >
      <div className="mt-8">
        <img src={urlImage} alt="" />
      </div>
      <h3 className="mt-10 font-bold">{title}</h3>
      <p className="mt-4 text-center leading-8">{content}</p>
      <a href="/" className="mt-11 flex items-center gap-8 font-bold">
        Learn more
        <ArrowRight />
      </a>
    </div>
  );
};

export default CardOurServices;
