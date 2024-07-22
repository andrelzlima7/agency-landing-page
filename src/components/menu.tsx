import Button from "./button";

const Menu = () => {
  return (
    <nav className="flex flex-col items-center justify-between gap-3 text-colorTextBold lg:flex-row lg:px-8">
      <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-12">
        <a href="/" className="text-2xl font-bold">
          Brainwave.io
        </a>
        <ul>
          <li className="flex gap-10 font-semibold">
            <a href="/">Demos</a>
            <a href="/">Pages</a>
            <a href="/">Support</a>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <Button />
    </nav>
  );
};

export default Menu;
