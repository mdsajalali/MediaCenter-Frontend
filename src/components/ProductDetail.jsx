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
        <div className="max-w-[500px] rounded-lg border p-5">
          <h2 className="mb-2 text-2xl font-semibold">{product?.name}</h2>
          <p className="mb-2 uppercase text-gray-600">
            Brand: {product?.brand}
          </p>
          <p className="mb-2 font-bold text-gray-800">${product?.price}</p>
          <p className="mb-2 text-[18px] text-gray-600">
            {product?.description}
          </p>
          <div className="flex items-center">
            <span className="mr-1 text-yellow-500">&#9733;</span>
            <span>{product?.rating}</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
