import feaImg1 from "../assets/images/highlights/product-small-01.jpg";
import Container from "../components/Container";

const FeaturedProductsData = [
  {
    id: 1,
    heading: "Netbook Acer Travel B113-E-10072.",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg1,
  },
  {
    id: 2,
    heading: "Netbook Acer Travel B113-E-10072.",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg1,
  },
  {
    id: 3,
    heading: "Netbook Acer Travel B113-E-10072.",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg1,
  },
];
const OnSaleProductsData = [
  {
    id: 1,
    heading: "Netbook Acer Travel B113-E-10072.",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg1,
  },
  {
    id: 2,
    heading: "Netbook Acer Travel B113-E-10072.",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg1,
  },
  {
    id: 3,
    heading: "Netbook Acer Travel B113-E-10072.",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg1,
  },
];
const TopRatedProductsData = [
  {
    id: 1,
    heading: "Netbook Acer Travel B113-E-10072.",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg1,
  },
  {
    id: 2,
    heading: "Netbook Acer Travel B113-E-10072.",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg1,
  },
  {
    id: 3,
    heading: "Netbook Acer Travel B113-E-10072.",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg1,
  },
];

const HighlightProducts = () => {
  return (
    <div className="bg-[#F9F9F9] border-t">
      <Container>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 py-14">
          <div>
            <h1 className="text-2xl font-semibold text-[#59B210] border-b pb-2">
              Featured Products
            </h1>
            {FeaturedProductsData.map((product) => (
              <div key={product.id} className="flex items-center gap-5 my-5 ">
                <div>
                  <h1 className="text-[#0E53A5] hover:text-[#59B210] transition-all cursor-pointer font-semibold">
                    {product.heading}
                  </h1>
                  <span className="line-through mr-2 text-gray-500">
                    {product.old_price}
                  </span>
                  <span>{product.regular_price}</span>
                </div>
                <div>
                  <img className="border" src={product.img} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-[#59B210] border-b pb-2">
              On-Sale Products
            </h1>
            {OnSaleProductsData.map((product) => (
              <div key={product.id} className="flex items-center gap-5 my-5 ">
                <div>
                  <h1 className="text-[#0E53A5] hover:text-[#59B210] transition-all cursor-pointer font-semibold">
                    {product.heading}
                  </h1>
                  <span className="line-through mr-2 text-gray-500">
                    {product.old_price}
                  </span>
                  <span>{product.regular_price}</span>
                </div>
                <div>
                  <img className="border" src={product.img} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-[#59B210] border-b pb-2">
              Top Rated Products
            </h1>
            {TopRatedProductsData.map((product) => (
              <div key={product.id} className="flex items-center gap-5 my-5 ">
                <div>
                  <h1 className="text-[#0E53A5] hover:text-[#59B210] transition-all cursor-pointer font-semibold">
                    {product.heading}
                  </h1>
                  <span className="line-through mr-2 text-gray-500">
                    {product.old_price}
                  </span>
                  <span>{product.regular_price}</span>
                </div>
                <div>
                  <img className="border" src={product.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HighlightProducts;
