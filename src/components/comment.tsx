import { Star } from "lucide-react";

interface PropsComment {
  author: string;
  role: string;
  content: string;
  urlImage: string;
}
const Comment = ({ author, content, role, urlImage }: PropsComment) => {
  return (
    <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20 2xl:px-80">
      <div>
        <img src={urlImage} alt="" />
      </div>
      <div className="flex flex-col items-center gap-5 lg:items-start">
        <span className="flex">
          {Array.from({ length: 5 }).map((_, id) => (
            <Star key={id} color="#FCAD38" fill="#FCAD38" />
          ))}
        </span>
        <p>"{content}"</p>
        <span className="flex gap-2">
          <strong>{author}</strong>
          <span>/</span>
          {role}
        </span>
      </div>
    </div>
  );
};

export default Comment;
