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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10   items-center">
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
              <FaFacebook className="w-6 h-6 text-gray-600 hover:text-[#59B210] transition-colors cursor-pointer" />
              <FaTwitter className="w-6 h-6 text-gray-600 hover:text-[#59B210] transition-colors cursor-pointer" />
              <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-[#59B210] transition-colors cursor-pointer" />
              <FaPinterest className="w-6 h-6 text-gray-600 hover:text-[#59B210] transition-colors cursor-pointer" />
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-xl font-semibold">Find It Fast</h1>
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Laptops & Computers
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Cameras & Photography
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Smart Phones & Tablets
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Video Games & Consoles
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                TV & Audio
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Gadgets
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Car Electronic & GPS
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
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
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Find A Store
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Weekly Deals
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Gift Cards
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Gadgets
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Recycling Program
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
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
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                My Account
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Order Tracking
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Wish List
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Customer Service
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Returns / Exchange
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                FAQs
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Product Support
              </Link>
              <Link
                to="/"
                className="text-sm text-gray-600 hover:text-[#59B210] transition-colors"
              >
                Extended Service Plans
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-gray-200 text-white">
        <div className="max-w-[1200px] mx-auto px-4 gap-5 flex flex-wrap items-center justify-between mt-10 py-4">
          <p className="text-sm text-black">
            &copy; Media Center - All Rights Reserved
          </p>
          <div className="flex gap-2">
            {payments.map((payment, id) => (
              <img
                key={id}
                className="w-16 h-8 object-contain border border-gray-700 rounded-md cursor-pointer"
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
