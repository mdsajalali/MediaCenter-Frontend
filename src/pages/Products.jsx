import { useEffect, useState } from "react";
import Container from "../components/Container";

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
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Products;
