import Banner from "../components/Banner";
import Category from "../components/Category";
import Container from "../components/Container";

const Hero = () => {
  return (
    <Container>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <Category />
        </div>
        <div className="col-span-8">
          <Banner />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
