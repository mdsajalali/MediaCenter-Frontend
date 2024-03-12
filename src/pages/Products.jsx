import { useEffect, useState } from "react";
import Container from "../components/Container";
import ProductCart from "../components/ProductCart";
import useAuth from "../hooks/useAuth";

// categories list
const categories = ["all products", "camera", "phone", "laptop", "headphone"];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const { loading } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      let url =
        "https://media-center-api.vercel.app/api/v1/products";
      if (category !== "all products") {
        url += `?category=${category}`;
      }
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    };
    fetchData();
  }, [category]);

  if (loading) {
    return (
      <div className="flex items-center justify-center my-20">
        <span className="loading loading-spinner  loading-lg  text-[#59B210]"></span>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-semibold pb-1 border-[#59B210] border-b-[3px] mt-10  w-[120px] mx-auto">
        Products
      </h1>

      <Container>
        <div className="flex justify-end items-center mt-5">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled>Choose one</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-20">
          {products.map((product) => (
            <ProductCart key={product._id} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Products;
