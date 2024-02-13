import img1 from "../assets/images/new-arrivals-01.jpg";
import img2 from "../assets/images/new-arrivals-02.jpg";
import Container from "../components/Container";

const newArrivalsImg = [img1, img2];

const NewArrivals = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mb-20">
        {newArrivalsImg.map((img, id) => (
          <img key={id} src={img} alt={`New Arrival ${id + 1}`} />
        ))}
      </div>
    </Container>
  );
};

export default NewArrivals;
