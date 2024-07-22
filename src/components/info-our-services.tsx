interface PropsInfoOurService {
  info: string;
  content: string;
}
const InfoOurService = ({ content, info }: PropsInfoOurService) => {
  return (
    <div className="flex flex-col gap-6 text-center lg:px-10">
      <strong className="text-5xl">{info}</strong>
      <p className="opacity-50">{content}</p>
    </div>
  );
};

export default InfoOurService;
