import CardOurServices from "./card-our-services";
import imageDesing from "../assets/Designer-rafiki.png";
import imageDeveloper from "../assets/Programming-rafiki.png";
import imageNotes from "../assets/Notes-rafiki.png";
import imageGroupCircle from "../assets/Group-circle.png";
import imageCommentAuthor from "../assets/comment-author.png";
import Comment from "./comment";

const OurServices = () => {
  return (
    <div className="my-12 border-b px-10 text-colorTextBold lg:my-32 xl:pl-40 xl:pr-60">
      <h3 className="text-center text-xs uppercase text-red-500">
        Our Services
      </h3>
      <p className="mt-10 text-center text-xl font-bold leading-snug lg:text-4xl">
        We provide great services for our
        <br />
        customers based on needs
      </p>
      <div className="relative mt-20 flex flex-col items-center justify-center gap-8 lg:flex-row">
        <CardOurServices
          variant="green"
          urlImage={imageDesing}
          title="Graphic Design"
          content="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
        />
        <CardOurServices
          variant="blue"
          urlImage={imageDeveloper}
          title="Web Development"
          content="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
        />
        <CardOurServices
          variant="red"
          urlImage={imageNotes}
          title="Content Writing"
          content="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
        />
        <img
          src={imageGroupCircle}
          alt=""
          className="absolute -bottom-11 right-36 z-0"
        />
      </div>
      <div className="my-40">
        <Comment
          author="Franklin Hicks"
          content="OMG! I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish."
          role="Web Developer"
          urlImage={imageCommentAuthor}
        />
      </div>
    </div>
  );
};

export default OurServices;
