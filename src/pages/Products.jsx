import { useEffect, useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/Products.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-semibold pb-1 border-[#59B210] border-b-[3px]   w-[120px] mx-auto">
        Products
      </h1>

      <Container>
        <div className="flex justify-end items-center mt-5">
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Choose one
            </option>
            <option>Camera</option>
            <option>Phone</option>
            <option>Laptop</option>
            <option>Headphone</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-20">
          {products.map((product, id) => (
            <div key={id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-60 mx-auto h-40 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.brand}</p>
              <p className="text-gray-600 mb-2">{product.type}</p>
              <p className="text-gray-800 font-bold mb-2">{product.price}</p>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">&#9733;</span>
                <span>{product.rating}</span>
              </div>
              <div className="flex items-center justify-center gap-5">
                <Link to={`/productDetail/${id}`}>
                  <button className=" bg-[#59B210] hover:bg-[#0E53A5] transition-all rounded-sm p-2 mt-3   font-semibold text-white ">
                    Quick View
                  </button>
                </Link>
                <button className=" bg-[#59B210] hover:bg-[#0E53A5] transition-all rounded-sm p-2 mt-3   font-semibold text-white ">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Products;
