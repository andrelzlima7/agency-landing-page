import Button from "./button";
import ImageHeader from "./image-header";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="bg-bgHeader px-10 py-7 xl:pl-40 xl:pr-60">
      <Menu />
      <div className="my-24 flex flex-col-reverse text-colorTextBold lg:flex-row lg:pl-20 xl:gap-28">
        <div className="flex flex-col gap-8 px-10">
          <h3 className="text-xs uppercase text-red-400 lg:pt-14">
            Let’s shift your business
          </h3>
          <h2 className="text-3xl font-bold xl:text-6xl">
            Shift your business fast with Shade Pro.
          </h2>
          <p>
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
          <div>
            <Button />
          </div>
        </div>

        <div>
          <ImageHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
