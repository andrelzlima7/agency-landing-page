interface PropsCardImageCaseStudies {
  urlImage: string;
  author: string;
  role: string;
}
const CardImageCaseStudies = ({
  author,
  role,
  urlImage,
}: PropsCardImageCaseStudies) => {
  return (
    <div className="mb-16 block">
      <img src={urlImage} alt="" />
      <span className="mt-4 block text-sm opacity-50 lg:mt-8 lg:px-7">
        {role}
      </span>
      <strong className="lg:px-7 lg:text-2xl">{author}</strong>
    </div>
  );
};

export default CardImageCaseStudies;
