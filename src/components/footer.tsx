import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Button from "./button";

const Footer = () => {
  return (
    <footer className="bg-colorTextBold px-10 text-white xl:px-64">
      <div className="flex flex-col items-center justify-between gap-4 border-b py-24 lg:flex-row">
        <div>
          <h3 className="mb-5 text-4xl font-bold">
            Ready to launch your next project?
          </h3>
          <p className="opacity-50">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-12 py-24 lg:justify-between">
        <div className="flex max-w-[400px] flex-col items-center gap-9">
          <a href="/" className="text-3xl font-bold">
            Brainwave.io
          </a>
          <p className="opacity-50">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <ul className="flex gap-8">
            <li>
              <a href="/">
                <Twitter fill="#68D585" color="#68D585" />{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <Facebook />{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <Instagram />{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <Linkedin />{" "}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="opacity-50">Company</h4>
          <ul className="mt-8 flex flex-col gap-4">
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Press</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="opacity-50">Product</h4>
          <ul className="mt-8 flex flex-col gap-4">
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">News</a>
            </li>
            <li>
              <a href="/">Help desk</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="opacity-50">Services</h4>
          <ul className="mt-8 flex flex-col gap-4">
            <li>
              <a href="/">Digital Marketing</a>
            </li>
            <li>
              <a href="/">Content Writing</a>
            </li>
            <li>
              <a href="/">SEO for Business</a>
            </li>
            <li>
              <a href="/">UI Design</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="opacity-50">Legal</h4>
          <ul className="mt-8 flex flex-col gap-4">
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <li>
              <a href="/">Return Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
