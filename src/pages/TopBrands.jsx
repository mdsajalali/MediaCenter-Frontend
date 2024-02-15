import Marquee from "react-fast-marquee";
import Container from "../components/Container";
import img1 from "../assets/images/brands/brand-01.jpg";
import img2 from "../assets/images/brands/brand-02.jpg";
import img3 from "../assets/images/brands/brand-03.jpg";
import img4 from "../assets/images/brands/brand-04.jpg";
import img5 from "../assets/images/brands/brand-02.jpg";
import img6 from "../assets/images/brands/brand-03.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const TopBrands = () => {
  return (
    <Container>
      <div className="my-10">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-500">
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
