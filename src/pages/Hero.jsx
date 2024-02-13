import Banner from "../components/Banner";
import Category from "../components/Category";
import Container from "../components/Container";

const Hero = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-10">
        <div className="lg:col-span-4 col-span-12">
          <Category />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <Banner />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
