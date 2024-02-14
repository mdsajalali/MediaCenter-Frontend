import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { FiEdit } from "react-icons/fi";

// categories list
const categories = ["all products", "camera", "phone", "laptop", "headphone"];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      let url = "http://localhost:5000/products";
      if (category !== "all products") {
        url += `?category=${category}`;
      }
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
    fetchData();
  }, [category]);

  const addToCart = (id) => {
    console.log(id);
  };

  return (
    <>
      <h1 className="text-3xl font-semibold pb-1 border-[#59B210] border-b-[3px]   w-[120px] mx-auto">
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
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={product?.image}
                alt={product?.name}
                className="w-60 mx-auto h-40 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-lg font-semibold mb-2">{product?.name}</h2>
              <p className="text-gray-600 mb-2">{product?.brand}</p>
              <p className="text-gray-800 font-bold mb-2">${product?.price}</p>
              <p className="text-gray-600 mb-2">{product?.description}</p>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">&#9733;</span>
                <span>{product?.rating}</span>
              </div>
              <div className="flex items-center justify-center gap-5">
                <Link to={`/updateProduct/${product._id}`}>
                  <button className=" bg-[#59B210] hover:bg-[#0E53A5] transition-all rounded-sm p-2 mt-3   font-semibold text-white ">
                    <FiEdit />
                  </button>
                </Link>
                <Link to={`/productDetail/${product._id}`}>
                  <button className=" bg-[#59B210] hover:bg-[#0E53A5] transition-all rounded-sm p-2 mt-3   font-semibold text-white ">
                    Quick View
                  </button>
                </Link>

                <Link>
                  <button
                    onClick={() => addToCart(products)}
                    className=" bg-[#59B210] hover:bg-[#0E53A5] transition-all rounded-sm p-2 mt-3   font-semibold text-white "
                  >
                    Add To Cart
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Products;
