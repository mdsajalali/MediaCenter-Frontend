import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Container from "../components/Container";

const Footer = () => {
  return (
    <div className="bg-[#F9F9F9] border-t py-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
          <div>
            <img className="w-60" src={logo} alt="" />
            <h1 className="text-[18px] font-semibold my-3">
              Feel Free To Contact Us Via Phone,Email Or Just Send Us Mail.
            </h1>
            <h2 className="text-[16px] font-semibold mb-3">
              17 Princess Road, London, Greater London NW1 8JR, UK 1-888-8MEDIA
              (1-888-892-9953)
            </h2>
            <div>
              <h1 className="text-[18px] mb-3">Get In Touch</h1>
              <div className="flex gap-4">
                <FaFacebook className="w-6 h-6 rounded-full ring cursor-pointer ring-[#59B210]" />
                <FaTwitter className="w-6 h-6 rounded-full ring cursor-pointer ring-[#59B210]" />
                <FaLinkedin className="w-6 h-6 rounded-full ring cursor-pointer ring-[#59B210]" />
                <FaPinterest className="w-6 h-6 rounded-full ring cursor-pointer ring-[#59B210]" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl">Find It Fast</h1>
            <div className="flex flex-col">
              <Link className="my-1" to="/">
                Laptops & Computers
              </Link>
              <Link className="my-1" to="/">
                Cameras & Photography
              </Link>
              <Link className="my-1" to="/">
                Smart Phones & Tablets
              </Link>
              <Link className="my-1" to="/">
                Video Games & Consoles
              </Link>
              <Link className="my-1" to="/">
                TV & Audio
              </Link>
              <Link className="my-1" to="/">
                Gadgets
              </Link>
              <Link className="my-1" to="/">
                Car Electronic & GPS
              </Link>
              <Link className="my-1" to="/">
                Accesories
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-2xl">Information</h1>
            <div className="flex flex-col">
              <Link className="my-1" to="/">
                Find A Store
              </Link>
              <Link className="my-1" to="/">
                About Us
              </Link>
              <Link className="my-1" to="/">
                Contact Us
              </Link>
              <Link className="my-1" to="/">
                Weekly Deals
              </Link>
              <Link className="my-1" to="/">
                Gift Cards
              </Link>
              <Link className="my-1" to="/">
                Gadgets
              </Link>
              <Link className="my-1" to="/">
                Recycling Program
              </Link>
              <Link className="my-1" to="/">
                Community Careers
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-2xl">Information</h1>
            <div className="flex flex-col">
              <Link className="my-1" to="/">
                My Account
              </Link>
              <Link className="my-1" to="/">
                Order Tracking
              </Link>
              <Link className="my-1" to="/">
                Wish List
              </Link>
              <Link className="my-1" to="/">
                Customer Service
              </Link>
              <Link className="my-1" to="/">
                Returns / Exchange
              </Link>
              <Link className="my-1" to="/">
                FAQs
              </Link>
              <Link className="my-1" to="/">
                Product Support
              </Link>
              <Link className="my-1" to="/">
                Extended Service Plans
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
