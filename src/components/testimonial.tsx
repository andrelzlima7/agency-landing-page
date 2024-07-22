import imagePerson from "../assets/testimonial-person.png";
const Testimonial = () => {
  return (
    <div className="flex flex-col items-center gap-9 bg-bluePage px-10 py-32 text-white">
      <h3 className="z-50 uppercase text-greenPage">Testimonial</h3>
      <p className="z-50 max-w-[700px] text-center text-3xl font-bold">
        “Simply the best. Better than all the rest. I’d recommend this product
        to beginners and advanced users.”
      </p>
      <div>
        <img src={imagePerson} alt="" />
      </div>
      <div className="flex flex-col text-center">
        <strong>Ian Klein</strong>
        <span className="opacity-50">Digital Marketer</span>
      </div>
    </div>
  );
};

export default Testimonial;
