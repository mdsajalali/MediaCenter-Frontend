import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import master from "../assets/images/payments/payment-master.png";
import paypal from "../assets/images/payments/payment-paypal.png";
import skrill from "../assets/images/payments/payment-skrill.png";
import visa from "../assets/images/payments/payment-visa.png";
import Container from "../components/Container";

const payments = [visa, master, paypal, skrill];

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] pt-10">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 md:grid-cols-4   lg:grid-cols-4">
          <div className="space-y-5">
            <Link to="/">
              <img className="w-48" src={logo} alt="Logo" />
            </Link>
            <p className="text-sm text-gray-600">
              Feel Free To Contact Us Via Phone, Email Or Just Send Us Mail.
            </p>
            <p className="text-sm text-gray-600">
              17 Princess Road, London, Greater London NW1 8JR, UK 1-888-8MEDIA
              (1-888-892-9953)
            </p>
            <div className="flex gap-4">
              <FaFacebook className="h-6 w-6 cursor-pointer text-gray-600 transition-colors hover:text-[#59B210]" />
              <FaTwitter className="h-6 w-6 cursor-pointer text-gray-600 transition-colors hover:text-[#59B210]" />
              <FaLinkedin className="h-6 w-6 cursor-pointer text-gray-600 transition-colors hover:text-[#59B210]" />
              <FaPinterest className="h-6 w-6 cursor-pointer text-gray-600 transition-colors hover:text-[#59B210]" />
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-xl font-semibold">Find It Fast</h1>
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Laptops & Computers
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Cameras & Photography
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Smart Phones & Tablets
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Video Games & Consoles
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                TV & Audio
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Gadgets
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Car Electronic & GPS
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Accessories
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-xl font-semibold">Information</h1>
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Find A Store
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                About Us
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Contact Us
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Weekly Deals
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Gift Cards
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Gadgets
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Recycling Program
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Community Careers
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-xl font-semibold">Account & Support</h1>
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                My Account
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Order Tracking
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Wish List
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Customer Service
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Returns / Exchange
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                FAQs
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Product Support
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 transition-colors hover:text-[#59B210]"
              >
                Extended Service Plans
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-gray-200 text-white">
        <div className="mx-auto mt-10 flex max-w-[1200px] flex-wrap items-center justify-between gap-5 px-4 py-4">
          <p className="text-sm text-black">
            &copy; Media Center - All Rights Reserved
          </p>
          <div className="flex gap-2">
            {payments.map((payment, id) => (
              <img
                key={id}
                className="h-8 w-16 cursor-pointer rounded-md border border-gray-700 object-contain"
                src={payment}
                alt={id}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
