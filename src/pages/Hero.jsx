import Banner from "../components/Banner";
import Category from "../components/Category";
import Container from "../components/Container";

const Hero = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-10">
        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <Category />
        </div>
        <div className="col-span-12 md:col-span-7 lg:col-span-8">
          <Banner />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
