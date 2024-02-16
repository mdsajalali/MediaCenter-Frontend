import feaImg1 from "../assets/images/highlights/product-small-01.jpg";
import feaImg2 from "../assets/images/highlights/product-small-02.jpg";
import feaImg3 from "../assets/images/highlights/product-small-03.jpg";
import feaImg4 from "../assets/images/highlights/product-small-04.jpg";
import feaImg5 from "../assets/images/highlights/product-small-05.jpg";
import feaImg6 from "../assets/images/highlights/product-small-06.jpg";
import feaImg7 from "../assets/images/highlights/product-small-07.jpg";
import feaImg8 from "../assets/images/highlights/product-small-08.jpg";
import feaImg9 from "../assets/images/highlights/product-small-09.jpg";
import Container from "../components/Container";
import Newsletter from "../components/Newsletter";

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
    heading: "PowerShot Elph 115 16MP Digital Camera.",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg2,
  },
  {
    id: 3,
    heading: "PowerShot Elph 115 16MP Digital Camera.",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg3,
  },
];
const OnSaleProductsData = [
  {
    id: 1,
    heading: "HP Scanner 2910P",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg4,
  },
  {
    id: 2,
    heading: "Galaxy Tab 3 GT-P5210 16GB, Wi-Fi, 10.1in.",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg5,
  },
  {
    id: 3,
    heading: "PowerShot Elph 115 16MP Digital Camera.",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg6,
  },
];
const TopRatedProductsData = [
  {
    id: 1,
    heading: "PowerShot Elph 115 16MP Digital Camera.",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg7,
  },
  {
    id: 2,
    heading: "PowerShot Elph 115 16MP Digital Camera.",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg8,
  },
  {
    id: 3,
    heading: "Surface RT 64GB, Wi-Fi, 10.6in - Dark Titanium.",
    regular_price: "$1873",
    old_price: "$2000",
    img: feaImg9,
  },
];

const HighlightProducts = () => {
  return (
    <>
      <div className="bg-[#F9F9F9] border-t border-b">
        <Container>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3   gap-10 pt-14 pb-20">
            <div>
              <h1 className="text-2xl font-semibold text-[#59B210] border-b pb-2">
                Featured Products
              </h1>
              {FeaturedProductsData.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between gap-5 my-5 "
                >
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
                <div
                  key={product.id}
                  className="flex items-center justify-between gap-5 my-5 "
                >
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
                <div
                  key={product.id}
                  className="flex items-center justify-between gap-5 my-5 "
                >
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

      {/* newsletter section */}
      <Newsletter />
    </>
  );
};

export default HighlightProducts;
