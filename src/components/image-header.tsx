import image from "../assets/header-image.png";
import waves from "../assets/waves.png";
import round from "../assets/round.png";
import fill from "../assets/Fill.png";

const ImageHeader = () => {
  return (
    <div className="relative m-auto h-[325px] w-[325px] lg:h-[465px] lg:w-[465px]">
      <img
        src={fill}
        alt="effect image"
        className="absolute -top-6 left-6 z-0 lg:-top-2"
      />

      <img src={image} alt="happy person" className="absolute z-40" />
      <img
        src={round}
        alt="effect image"
        className="absolute bottom-1 left-0 z-50 lg:bottom-5 lg:left-2"
      />
      <img
        src={waves}
        alt="effect image"
        className="absolute bottom-4 right-6 z-50 lg:bottom-10 lg:right-10"
      />
    </div>
  );
};

export default ImageHeader;
