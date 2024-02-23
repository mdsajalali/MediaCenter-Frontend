import { useLoaderData } from "react-router-dom";
import Container from "./Container";

const ProductDetail = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <Container>
      <div className="my-10 flex items-center justify-between gap-10">
        <div>
          <img className="w-96 object-cover" src={product.image} alt="" />
        </div>
        <div className="max-w-[500px] border p-5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">{product?.name}</h2>
          <p className="text-gray-600 mb-2 uppercase">
            Brand: {product?.brand}
          </p>
          <p className="text-gray-800 font-bold mb-2">${product?.price}</p>
          <p className="text-gray-600 mb-2 text-[18px]">
            {product?.description}
          </p>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">&#9733;</span>
            <span>{product?.rating}</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
