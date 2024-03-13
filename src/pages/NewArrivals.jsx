import img1 from "../assets/images/new-arrivals-01.jpg";
import img2 from "../assets/images/new-arrivals-02.jpg";
import Container from "../components/Container";

const newArrivalsImg = [img1, img2];

const NewArrivals = () => {
  return (
    <Container>
      <div className="mb-20 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
        {newArrivalsImg.map((img, id) => (
          <img key={id} src={img} alt={`New Arrival ${id + 1}`} />
        ))}
      </div>
    </Container>
  );
};

export default NewArrivals;
