interface PropsCardWhyChooseUs {
  urlImage: string;
  title: string;
  content: string;
}
const CardWhyChooseUs = ({
  content,
  title,
  urlImage,
}: PropsCardWhyChooseUs) => {
  return (
    <div className="flex flex-col items-center gap-8 lg:my-10 lg:flex-row">
      <img src={urlImage} alt="" />
      <div className="text-center">
        <strong>{title}</strong>
        <p className="text-center opacity-50 lg:mt-4">{content}</p>
      </div>
    </div>
  );
};

export default CardWhyChooseUs;
