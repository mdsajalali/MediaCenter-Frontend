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

      <div className=" bg-[#3D3D3D]">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-wrap items-center justify-between mt-10 py-2">
          <div>
            <p className="text-white">© Media Center - All Rights Reserved</p>
          </div>
          <div className="flex gap-2 py-4 ">
            {payments.map((payment, id) => (
              <div key={id}>
                <img
                  className="w-16 h-8 rounded-md object-cover cursor-pointer bg-white"
                  src={payment}
                  alt={id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
