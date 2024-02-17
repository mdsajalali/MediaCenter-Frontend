import Banner from "../components/Banner";
import Category from "../components/Category";
import Container from "../components/Container";

const Hero = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4 md:col-span-5 col-span-12">
          <Category />
        </div>
        <div className="lg:col-span-8 md:col-span-7 col-span-12">
          <Banner />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
