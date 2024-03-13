import Marquee from "react-fast-marquee";
import img1 from "../assets/images/brands/brand-01.jpg";
import {
  default as img2,
  default as img5,
} from "../assets/images/brands/brand-02.jpg";
import {
  default as img3,
  default as img6,
} from "../assets/images/brands/brand-03.jpg";
import img4 from "../assets/images/brands/brand-04.jpg";
import Container from "../components/Container";

const images = [img1, img2, img3, img4, img5, img6];

const TopBrands = () => {
  return (
    <Container>
      <div className="my-10">
        <h1 className="mx-auto mb-10 w-[152px] border-b-[3px] border-[#59B210]   pb-1   text-3xl font-semibold    text-gray-500 md:text-3xl">
          Top Brands
        </h1>
        <Marquee>
          {images.map((img, id) => (
            <img className="w-[200px] " key={id} src={img} alt="" />
          ))}
        </Marquee>
      </div>
    </Container>
  );
};

export default TopBrands;
